import {
  TrendingUp,
  BarChart3,
  Shield,
  Zap,
  Globe,
  Users,
  ArrowRight,
  CheckCircle,
  Coins,
  Building2,
  Copy,
  Brain,
  Lock,
  Clock,
} from 'lucide-react';

const AboutPageSection: React.FC = () => {
  return (
    <div className="bg-slate-950 text-white pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 0%, transparent 50%), 
                             radial-gradient(circle at 75% 75%, #06b6d4 0%, transparent 50%)`,
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium">
                  <Zap className="w-4 h-4 mr-2" />
                  Digital Finance Revolution
                </div>

                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Trade Everything.
                  <span className="block text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
                    One Platform.
                  </span>
                </h1>

                <p className="text-xl text-slate-300 leading-relaxed max-w-lg">
                  Bridge traditional markets and DeFi with DifiTrades. Trade
                  crypto, stocks, and copy top strategies in one secure,
                  intelligent ecosystem designed for your growth.
                </p>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Smart Trading</h3>
                    <p className="text-sm text-slate-400">
                      AI-powered insights
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-cyan-600/20 rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Multi-Asset</h3>
                    <p className="text-sm text-slate-400">Stocks & Crypto</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-emerald-600/20 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">
                      Secure Platform
                    </h3>
                    <p className="text-sm text-slate-400">
                      Bank-grade security
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center">
                    <Copy className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Copy Trading</h3>
                    <p className="text-sm text-slate-400">
                      Follow top performers
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group relative px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105">
                  <span className="relative z-10">Start Trading Now</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </button>

                <button className="px-8 py-3 border-2 border-slate-600 rounded-lg font-semibold text-white hover:border-slate-500 hover:bg-slate-800 transition-all duration-200">
                  Watch Demo
                </button>
              </div>
            </div>

            {/* Visual/Dashboard Preview */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-slate-900 to-slate-900 rounded-2xl border border-slate-700 shadow-2xl overflow-hidden">
                {/* Mock Dashboard Header */}
                <div className="bg-slate-800 border-b border-slate-700 px-6 py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg"></div>
                      <span className="font-semibold text-white">
                        DifiTrades
                      </span>
                    </div>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Mock Trading Interface */}
                <div className="p-6 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-700/50 rounded-lg p-4">
                      <div className="text-sm text-slate-400 mb-1">
                        Portfolio Value
                      </div>
                      <div className="text-2xl font-bold text-white">
                        $127,543
                      </div>
                      <div className="text-sm text-green-400">+12.34%</div>
                    </div>
                    <div className="bg-slate-700/50 rounded-lg p-4">
                      <div className="text-sm text-slate-400 mb-1">
                        Today's P&L
                      </div>
                      <div className="text-2xl font-bold text-white">
                        +$2,847
                      </div>
                      <div className="text-sm text-green-400">+2.29%</div>
                    </div>
                  </div>

                  {/* Mock Asset List */}
                  <div className="space-y-2">
                    {['BTC/USD', 'AAPL', 'ETH/USD', 'TSLA'].map((asset, i) => (
                      <div
                        key={asset}
                        className="flex items-center justify-between bg-slate-700/30 rounded-lg p-3"
                      >
                        <span className="text-white font-medium">{asset}</span>
                        <span
                          className={`text-sm font-semibold ${
                            i % 2 === 0 ? 'text-green-400' : 'text-red-400'
                          }`}
                        >
                          {i % 2 === 0 ? '+' : '-'}
                          {(Math.random() * 5 + 1).toFixed(2)}%
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-cyan-500/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Trading Markets Section */}
      <section className="relative py-20 lg:py-28 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
                Multiple Markets,
              </span>
              <span className="block text-white">One Unified Experience</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Access traditional stocks, cutting-edge cryptocurrencies, and DeFi
              protocols through our advanced trading infrastructure designed for
              both beginners and professionals.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cryptocurrency Trading */}
            <div className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-slate-700 p-8 hover:border-blue-500/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-cyan-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-slate-700/60 rounded-xl flex items-center justify-center mb-6">
                  <Coins className="w-8 h-8 text-orange-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Cryptocurrency Trading
                </h3>
                <p className="text-slate-500 mb-6">
                  Trade 200+ cryptocurrencies with lightning-fast execution,
                  deep liquidity, and advanced charting tools. From Bitcoin to
                  emerging altcoins.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-slate-300">
                      Spot & Futures Trading
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-slate-300">
                      DeFi Token Integration
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-slate-300">Cross-Chain Support</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-slate-300">
                      Yield Farming & Staking
                    </span>
                  </div>
                </div>

                <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="text-xs text-slate-400 mb-3 font-medium uppercase tracking-wide">
                    Popular Crypto Assets
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {['BTC', 'ETH', 'SOL', 'ADA', 'DOT', 'LINK'].map(
                      (crypto) => (
                        <div
                          key={crypto}
                          className="px-2 py-1.5 bg-slate-600/40 border border-slate-500/30 rounded text-xs font-medium text-slate-200 text-center hover:bg-slate-600/60 transition-colors"
                        >
                          {crypto}
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Stock Market Trading */}
            <div className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-slate-700 p-8 hover:border-emerald-500/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/5 to-blue-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-slate-700/60 rounded-xl flex items-center justify-center mb-6">
                  <Building2 className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Stock Market Trading
                </h3>
                <p className="text-slate-500 mb-6">
                  Access global stock markets including NYSE, NASDAQ, and
                  international exchanges with real-time data and fractional
                  share trading.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-slate-300">
                      Commission-Free Trading
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-slate-300">Fractional Shares</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-slate-300">
                      Extended Hours Trading
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-slate-300">
                      Dividend Reinvestment
                    </span>
                  </div>
                </div>

                <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="text-xs text-slate-400 mb-3 font-medium uppercase tracking-wide">
                    Top Stock Categories
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      'Tech',
                      'Finance',
                      'Healthcare',
                      'Energy',
                      'REITs',
                      'ETFs',
                    ].map((category) => (
                      <div
                        key={category}
                        className="px-2 py-1.5 bg-slate-600/40 border border-slate-500/30 rounded text-xs font-medium text-slate-200 text-center hover:bg-slate-600/60 transition-colors"
                      >
                        {category}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Copy Trading */}
            <div className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-slate-700 p-8 hover:border-purple-500/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-slate-700/60 rounded-xl flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Copy Trading
                </h3>
                <p className="text-slate-500 mb-6">
                  Follow and automatically copy trades from top-performing
                  traders. Learn from the best while building your portfolio
                  with proven strategies.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-slate-300">
                      Verified Trader Performance
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-slate-300">
                      Risk Management Tools
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-slate-300">
                      Customizable Copy Ratios
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-slate-300">
                      Social Trading Community
                    </span>
                  </div>
                </div>

                <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="text-xs text-slate-400 mb-3 font-medium uppercase tracking-wide">
                    Top Trader Categories
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      'Conservative',
                      'Growth',
                      'Day Trading',
                      'Swing',
                      'Crypto',
                      'Forex',
                    ].map((strategy) => (
                      <div
                        key={strategy}
                        className="px-2 py-1.5 bg-slate-600/40 border border-slate-500/30 rounded text-xs font-medium text-slate-200 text-center hover:bg-slate-600/60 transition-colors"
                      >
                        {strategy}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features Section */}
      <section className="relative py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Features Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                  <span className="text-white">Built for</span>
                  <span className="block text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
                    Modern Traders
                  </span>
                </h2>
                <p className="text-xl text-slate-300">
                  Our platform combines institutional-grade technology with
                  user-friendly design, providing everything you need to trade
                  smarter and more efficiently.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Brain className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      AI-Powered Analytics
                    </h3>
                    <p className="text-slate-500">
                      Advanced machine learning algorithms analyze market
                      patterns, sentiment, and trends to provide actionable
                      trading insights and risk assessments.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Lock className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Bank-Grade Security
                    </h3>
                    <p className="text-slate-500">
                      Multi-layer security with 256-bit encryption, cold storage
                      for crypto assets, and regulatory compliance across
                      multiple jurisdictions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Lightning Fast Execution
                    </h3>
                    <p className="text-slate-500">
                      Sub-millisecond order execution with direct market access
                      and smart order routing to ensure you get the best prices
                      available.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-cyan-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Global Market Access
                    </h3>
                    <p className="text-slate-500">
                      Trade across multiple time zones with 24/7 crypto markets
                      and extended hours for traditional assets, all from a
                      single platform.
                    </p>
                  </div>
                </div>
              </div>

              <button className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105">
                <span className="relative z-10">Explore Platform Features</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>

            {/* Platform Visual */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-slate-700 shadow-2xl overflow-hidden">
                {/* Advanced Trading Interface Mock */}
                <div className="bg-slate-800 border-b border-slate-700 px-6 py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-4">
                      <span className="text-sm text-slate-300">Markets</span>
                      <span className="text-sm text-blue-400 border-b-2 border-blue-400">
                        Portfolio
                      </span>
                      <span className="text-sm text-slate-300">Analytics</span>
                      <span className="text-sm text-slate-300">Social</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-slate-400">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span>Live</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-6">
                  {/* Performance Overview */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">
                        +24.7%
                      </div>
                      <div className="text-sm text-slate-400">Total Return</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">1.47</div>
                      <div className="text-sm text-slate-400">Sharpe Ratio</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">-8.2%</div>
                      <div className="text-sm text-slate-400">Max Drawdown</div>
                    </div>
                  </div>

                  {/* AI Insights */}
                  <div className="bg-gradient-to-r from-blue-600/10 to-cyan-600/10 border border-blue-500/20 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Brain className="w-4 h-4 text-blue-400" />
                      <span className="text-sm font-medium text-blue-300">
                        AI Market Insight
                      </span>
                    </div>
                    <p className="text-sm text-slate-300">
                      Tech sector showing strong momentum. Consider increasing
                      allocation to FAANG stocks based on earnings projections.
                    </p>
                  </div>

                  {/* Active Positions */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">Active Positions</span>
                      <span className="text-blue-400">View All</span>
                    </div>
                    <div className="space-y-2">
                      {[
                        { symbol: 'AAPL', change: '+2.34%', value: '$15,240' },
                        { symbol: 'BTC', change: '+5.67%', value: '$8,950' },
                        { symbol: 'GOOGL', change: '-1.12%', value: '$12,100' },
                        { symbol: 'ETH', change: '+3.45%', value: '$6,780' },
                      ].map((position) => (
                        <div
                          key={position.symbol}
                          className="flex items-center justify-between bg-slate-700/30 rounded-lg p-3"
                        >
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-slate-600 rounded-full flex items-center justify-center">
                              <span className="text-xs font-medium text-white">
                                {position.symbol.slice(0, 2)}
                              </span>
                            </div>
                            <span className="text-white font-medium">
                              {position.symbol}
                            </span>
                          </div>
                          <div className="text-right">
                            <div className="text-white font-medium">
                              {position.value}
                            </div>
                            <div
                              className={`text-sm ${
                                position.change.startsWith('+')
                                  ? 'text-green-400'
                                  : 'text-red-400'
                              }`}
                            >
                              {position.change}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-cyan-500/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPageSection;
