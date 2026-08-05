<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zinam Marketplace | Premium Admin</title>
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- React & ReactDOM -->
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    
    <!-- Babel for JSX -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    
    <!-- Lucide Icons -->
    <script src="https://unpkg.com/lucide@latest"></script>
    
    <!-- Recharts -->
    <script src="https://unpkg.com/recharts/umd/Recharts.js"></script>

    <!-- Framer Motion -->
    <script src="https://unpkg.com/framer-motion@10.16.4/dist/framer-motion.js"></script>

    <!-- Font: Playfair Display (Luxury) & Inter (UI) -->
    <link href="https://cdn.jsdelivr.net/fontsource/fonts/playfair-display@latest/latin-700.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-400.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-500.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-600.css" rel="stylesheet">

    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        gold: {
                            400: '#D4AF37',
                            500: '#C5A028',
                            600: '#B08D1E',
                        },
                        dark: {
                            900: '#0a0a0a',
                            800: '#121212',
                            700: '#1c1c1c',
                            600: '#262626',
                        }
                    },
                    fontFamily: {
                        serif: ['Playfair Display', 'serif'],
                        sans: ['Inter', 'sans-serif'],
                    }
                }
            }
        }
    </script>
    <style>
        body { background-color: #0a0a0a; color: #e5e5e5; }
        ::-webkit-scrollbar { width: 8px; height: 8px; }
        ::-webkit-scrollbar-track { bg: #121212; }
        ::-webkit-scrollbar-thumb { background: #333; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #D4AF37; }
        
        .glass-panel {
            background: rgba(20, 20, 20, 0.6);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(212, 175, 55, 0.1);
        }
        
        .gold-gradient-text {
            background: linear-gradient(to right, #D4AF37, #F2D06B, #D4AF37);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .input-luxury {
            background: #121212;
            border: 1px solid #333;
            transition: all 0.3s ease;
        }
        .input-luxury:focus {
            border-color: #D4AF37;
            box-shadow: 0 0 0 2px rgba(212, 175, 55, 0.1);
            outline: none;
        }
    </style>
</head>
<body>
    <div id="root"></div>

    <script type="text/babel">
        const { useState, useEffect, useMemo } = React;
        const { motion, AnimatePresence } = window.Motion;
        const { 
            LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar 
        } = Recharts;
        
        // --- Icons Helper ---
        const Icon = ({ name, size = 20, className = "" }) => {
            const ref = React.useRef(null);
            useEffect(() => {
                if (ref.current) {
                    ref.current.innerHTML = "";
                    const svg = lucide.createIcons({ icons: { [name]: lucide.icons[name] } })[name];
                    if(svg) {
                        svg.setAttribute("width", size);
                        svg.setAttribute("height", size);
                        svg.setAttribute("class", className);
                        ref.current.appendChild(svg);
                    }
                }
            }, [name, size, className]);
            return <span ref={ref} className="inline-flex items-center justify-center" />;
        };

        // --- Mock Data ---
        const MOCK_STATS = [
            { title: "Total Revenue", value: "$124,500", change: "+12.5%", icon: "DollarSign", trend: "up" },
            { title: "Active Orders", value: "1,482", change: "+8.2%", icon: "ShoppingBag", trend: "up" },
            { title: "New Customers", value: "384", change: "-2.4%", icon: "Users", trend: "down" },
            { title: "Pending Reviews", value: "42", change: "+5.1%", icon: "Star", trend: "up" },
        ];

        const CHART_DATA = [
            { name: 'Mon', sales: 4000, orders: 240 },
            { name: 'Tue', sales: 3000, orders: 139 },
            { name: 'Wed', sales: 2000, orders: 980 },
            { name: 'Thu', sales: 2780, orders: 390 },
            { name: 'Fri', sales: 1890, orders: 480 },
            { name: 'Sat', sales: 2390, orders: 380 },
            { name: 'Sun', sales: 3490, orders: 430 },
        ];

        const RECENT_ORDERS = [
            { id: "#ORD-7782", customer: "Alex Morgan", status: "Completed", amount: "$1,240.00", date: "2 mins ago" },
            { id: "#ORD-7781", customer: "Sarah Jones", status: "Processing", amount: "$850.50", date: "15 mins ago" },
            { id: "#ORD-7780", customer: "Michael Chen", status: "Pending", amount: "$2,100.00", date: "1 hour ago" },
            { id: "#ORD-7779", customer: "Emma Wilson", status: "Cancelled", amount: "$320.00", date: "3 hours ago" },
        ];

        // --- Components ---

        const SidebarItem = ({ icon, label, active, onClick }) => (
            <motion.button
                whileHover={{ x: 4 }}
                onClick={onClick}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 mb-1
                    ${active 
                        ? 'bg-gold-500/10 text-gold-400 border-r-2 border-gold-500' 
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
            >
                <Icon name={icon} size={18} className={active ? "text-gold-400" : "text-gray-500"} />
                <span className="font-medium text-sm">{label}</span>
            </motion.button>
        );

        const StatCard = ({ stat }) => (
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-panel p-6 rounded-xl relative overflow-hidden group"
            >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Icon name={stat.icon} size={64} className="text-gold-400" />
                </div>
                <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="p-2 rounded-lg bg-dark-700 text-gold-400">
                            <Icon name={stat.icon} size={20} />
                        </div>
                        <span className="text-gray-400 text-sm font-medium">{stat.title}</span>
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-white mb-1">{stat.value}</h3>
                    <div className={`text-xs font-medium flex items-center gap-1 ${stat.trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                        <Icon name={stat.trend === 'up' ? 'TrendingUp' : 'TrendingDown'} size={12} />
                        {stat.change} from last month
                    </div>
                </div>
            </motion.div>
        );

        const DashboardPage = () => (
            <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {MOCK_STATS.map((stat, idx) => <StatCard key={idx} stat={stat} />)}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 glass-panel p-6 rounded-xl">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-lg font-serif font-bold text-white">Revenue Analytics</h3>
                            <select className="bg-dark-800 border border-gray-700 text-xs rounded px-2 py-1 text-gray-300 outline-none">
                                <option>Last 7 Days</option>
                                <option>Last Month</option>
                            </select>
                        </div>
                        <div className="h-[300px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={CHART_DATA}>
                                    <defs>
                                        <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#D4AF37" stopOpacity={0.3}/>
                                            <stop offset="95%" stopColor="#D4AF37" stopOpacity={0}/>
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                                    <XAxis dataKey="name" stroke="#666" tick={{fontSize: 12}} axisLine={false} tickLine={false} />
                                    <YAxis stroke="#666" tick={{fontSize: 12}} axisLine={false} tickLine={false} />
                                    <Tooltip 
                                        contentStyle={{ backgroundColor: '#1c1c1c', borderColor: '#333', color: '#fff' }}
                                        itemStyle={{ color: '#D4AF37' }}
                                    />
                                    <Area type="monotone" dataKey="sales" stroke="#D4AF37" strokeWidth={2} fillOpacity={1} fill="url(#colorSales)" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    <div className="glass-panel p-6 rounded-xl">
                        <h3 className="text-lg font-serif font-bold text-white mb-4">Recent Orders</h3>
                        <div className="space-y-4">
                            {RECENT_ORDERS.map((order) => (
                                <div key={order.id} className="flex items-center justify-between p-3 bg-dark-800/50 rounded-lg border border-white/5 hover:border-gold-500/30 transition-colors">
                                    <div>
                                        <p className="text-sm font-medium text-white">{order.customer}</p>
                                        <p className="text-xs text-gray-500">{order.date}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm font-bold text-gold-400">{order.amount}</p>
                                        <span className={`text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider
                                            ${order.status === 'Completed' ? 'bg-green-500/10 text-green-400' : 
                                              order.status === 'Processing' ? 'bg-blue-500/10 text-blue-400' :
                                              order.status === 'Pending' ? 'bg-yellow-500/10 text-yellow-400' :
                                              'bg-red-500/10 text-red-400'}`}>
                                            {order.status}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="w-full mt-4 py-2 text-xs text-gray-400 hover:text-gold-400 transition-colors border-t border-white/5 pt-3">
                            View All Orders
                        </button>
                    </div>
                </div>
            </div>
        );

        const AddProductPage = () => {
            const [formData, setFormData] = useState({
                name: "", slug: "", price: "", salePrice: "", sku: "", stock: "",
                category: "", brand: "", shortDesc: "", description: "",
                seoTitle: "", seoDesc: "", featured: false, digital: false, status: "draft"
            });
            const [images, setImages] = useState([]);
            const [dragActive, setDragActive] = useState(false);

            const handleChange = (e) => {
                const { name, value, type, checked } = e.target;
                setFormData(prev => ({
                    ...prev,
                    [name]: type === 'checkbox' ? checked : value
                }));
            };

            const handleDrag = (e) => {
                e.preventDefault();
                e.stopPropagation();
                if (e.type === "dragenter" || e.type === "dragover") {
                    setDragActive(true);
                } else if (e.type === "dragleave") {
                    setDragActive(false);
                }
            };

            const handleDrop = (e) => {
                e.preventDefault();
                e.stopPropagation();
                setDragActive(false);
                if (e.dataTransfer.files && e.dataTransfer.files[0]) {
                    // Simulate upload
                    const newFiles = Array.from(e.dataTransfer.files).map(f => URL.createObjectURL(f));
                    setImages(prev => [...prev, ...newFiles]);
                }
            };

            const discount = useMemo(() => {
                if(!formData.price || !formData.salePrice) return 0;
                const p = parseFloat(formData.price);
                const s = parseFloat(formData.salePrice);
                if(s >= p) return 0;
                return Math.round(((p - s) / p) * 100);
            }, [formData.price, formData.salePrice]);

            return (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Form */}
                    <div className="lg:col-span-2 space-y-6">
                        <section className="glass-panel p-6 rounded-xl space-y-4">
                            <h3 className="text-lg font-serif text-white border-b border-white/10 pb-2 mb-4">General Information</h3>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="text-xs text-gray-400 uppercase tracking-wider">Product Name</label>
                                    <input name="name" value={formData.name} onChange={handleChange} className="input-luxury w-full p-3 rounded text-white text-sm" placeholder="e.g. Luxury Gold Watch" />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs text-gray-400 uppercase tracking-wider">Slug</label>
                                    <input name="slug" value={formData.slug} onChange={handleChange} className="input-luxury w-full p-3 rounded text-white text-sm" placeholder="luxury-gold-watch" />
                                </div>
                            </div>

                            <div className="space-y-1">
                                <label className="text-xs text-gray-400 uppercase tracking-wider">Short Description</label>
                                <textarea name="shortDesc" rows="2" value={formData.shortDesc} onChange={handleChange} className="input-luxury w-full p-3 rounded text-white text-sm" placeholder="Brief summary..." />
                            </div>

                            <div className="space-y-1">
                                <label className="text-xs text-gray-400 uppercase tracking-wider">Full Description</label>
                                <textarea name="description" rows="5" value={formData.description} onChange={handleChange} className="input-luxury w-full p-3 rounded text-white text-sm" placeholder="Detailed product features..." />
                            </div>
                        </section>

                        <section className="glass-panel p-6 rounded-xl space-y-4">
                            <h3 className="text-lg font-serif text-white border-b border-white/10 pb-2 mb-4">Media Gallery</h3>
                            <div 
                                className={`border-2 border-dashed rounded-xl p-8 text-center transition-all ${dragActive ? 'border-gold-500 bg-gold-500/5' : 'border-gray-700 hover:border-gray-500'}`}
                                onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}
                            >
                                <Icon name="UploadCloud" size={32} className="mx-auto text-gray-500 mb-2" />
                                <p className="text-sm text-gray-400">Drag & Drop images here or click to browse</p>
                                <p className="text-xs text-gray-600 mt-1">Supports JPG, PNG, WebP</p>
                            </div>
                            {images.length > 0 && (
                                <div className="grid grid-cols-4 gap-2 mt-4">
                                    {images.map((img, i) => (
                                        <div key={i} className="aspect-square rounded bg-dark-700 overflow-hidden relative group">
                                            <img src={img} alt="preview" className="w-full h-full object-cover" />
                                            <button onClick={() => setImages(images.filter((_, idx) => idx !== i))} className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center text-red-400 transition-opacity">
                                                <Icon name="Trash2" size={16} />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </section>

                        <section className="glass-panel p-6 rounded-xl space-y-4">
                            <h3 className="text-lg font-serif text-white border-b border-white/10 pb-2 mb-4">Pricing & Inventory</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="space-y-1">
                                    <label className="text-xs text-gray-400 uppercase tracking-wider">Regular Price ($)</label>
                                    <input type="number" name="price" value={formData.price} onChange={handleChange} className="input-luxury w-full p-3 rounded text-white text-sm" />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs text-gray-400 uppercase tracking-wider">Sale Price ($)</label>
                                    <input type="number" name="salePrice" value={formData.salePrice} onChange={handleChange} className="input-luxury w-full p-3 rounded text-white text-sm" />
                                </div>
                                <div className="space-y-1">
                                    <

