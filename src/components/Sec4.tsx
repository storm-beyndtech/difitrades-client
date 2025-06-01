import React, { useState, useRef } from 'react';

// Type definitions
interface MarketItem {
  name: string;
  ticker: string;
  change: string;
  color: string;
  logo: string;
  data: number[];
  price: string;
}

type MarketDataType = {
  [key: string]: MarketItem[];
};

// Generate realistic chart data with natural patterns
const generateChartData = (
  baseLine: number,
  volatility: number,
  trend: number,
  points = 24,
) => {
  const data = [];
  let value = baseLine;

  for (let i = 0; i < points; i++) {
    const noise = (Math.random() - 0.5) * volatility;
    const trendComponent = trend * (i / points);
    value = value + noise + trendComponent;
    if (value < 0) value = baseLine * 0.1;
    data.push(value);
  }
  return data;
};

// Calculate percentage change between first and last value
const calculateChange = (data: number[]) => {
  const first = data[0];
  const last = data[data.length - 1];
  const percentChange = ((last - first) / first) * 100;
  return (percentChange >= 0 ? '+' : '') + percentChange.toFixed(2) + '%';
};

// Market data for all tabs with actual logos
const marketData: MarketDataType = {
  'Share CFDs': [
    {
      name: 'Meta',
      ticker: 'META',
      change: '+0.37%',
      color: '#4ade80',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Meta-Logo.png/1200px-Meta-Logo.png', // New Meta logo
      price: '$304.75',
      data: generateChartData(304.75, 3, 1.5),
    },
    {
      name: 'Netflix',
      ticker: 'NFLX',
      change: '+0.14%',
      color: '#4ade80',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png',
      price: '$631.22',
      data: generateChartData(631.22, 5, 0.7),
    },
    {
      name: 'Amazon',
      ticker: 'AMZN',
      change: '-0.34%',
      color: '#f87171',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png',
      price: '$181.51',
      data: generateChartData(181.51, 2, -0.6),
    },
    {
      name: 'Tesla',
      ticker: 'TSLA',
      change: '+0.53%',
      color: '#4ade80',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Tesla_T_symbol.svg/1200px-Tesla_T_symbol.svg.png',
      price: '$175.22',
      data: generateChartData(175.22, 4, 1.8),
    },
  ],
  Crypto: [
    {
      name: 'Bitcoin',
      ticker: 'BTC/USD',
      change: '+1.24%',
      color: '#4ade80',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png',
      price: '$67,850',
      data: generateChartData(67850, 1200, 900),
    },
    {
      name: 'Ethereum',
      ticker: 'ETH/USD',
      change: '+0.87%',
      color: '#4ade80',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ethereum_logo_2014.svg/1200px-Ethereum_logo_2014.svg.png',
      price: '$3,570',
      data: generateChartData(3570, 80, 60),
    },
    {
      name: 'Solana',
      ticker: 'SOL/USD',
      change: '-0.42%',
      color: '#f87171',
      logo: 'https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png',
      price: '$142.80',
      data: generateChartData(142.8, 3.5, -0.7),
    },
    {
      name: 'Cardano',
      ticker: 'ADA/USD',
      change: '+0.33%',
      color: '#4ade80',
      logo: 'https://cryptologos.cc/logos/cardano-ada-logo.png',
      price: '$0.452',
      data: generateChartData(0.452, 0.01, 0.004),
    },
  ],
  Forex: [
    {
      name: 'EUR/USD',
      ticker: 'EUR/USD',
      change: '-0.12%',
      color: '#f87171',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/1200px-Flag_of_Europe.svg.png',
      price: '1.0848',
      data: generateChartData(1.0848, 0.0015, -0.0013),
    },
    {
      name: 'GBP/USD',
      ticker: 'GBP/USD',
      change: '+0.05%',
      color: '#4ade80',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png',
      price: '1.267',
      data: generateChartData(1.267, 0.0018, 0.0006),
    },
    {
      name: 'USD/JPY',
      ticker: 'USD/JPY',
      change: '+0.23%',
      color: '#4ade80',
      logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/1200px-Flag_of_Japan.svg.png',
      price: '149.55',
      data: generateChartData(149.55, 0.25, 0.35),
    },
    {
      name: 'AUD/USD',
      ticker: 'AUD/USD',
      change: '-0.08%',
      color: '#f87171',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/1200px-Flag_of_Australia_%28converted%29.svg.png',
      price: '0.6565',
      data: generateChartData(0.6565, 0.0028, -0.0006),
    },
  ],
  Indices: [
    {
      name: 'S&P 500',
      ticker: 'US500',
      change: '+0.32%',
      color: '#4ade80',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/S%26P_500_logo.svg/1200px-S%26P_500_logo.svg.png',
      price: '5,148',
      data: generateChartData(5148, 15, 17),
    },
    {
      name: 'Dow Jones',
      ticker: 'US30',
      change: '+0.18%',
      color: '#4ade80',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Dow_Jones_Logo.svg/1200px-Dow_Jones_Logo.svg.png',
      price: '39,450',
      data: generateChartData(39450, 100, 70),
    },
    {
      name: 'NASDAQ',
      ticker: 'US100',
      change: '+0.47%',
      color: '#4ade80',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/NASDAQ_Logo.svg/1200px-NASDAQ_Logo.svg.png',
      price: '18,050',
      data: generateChartData(18050, 60, 85),
    },
    {
      name: 'FTSE 100',
      ticker: 'UK100',
      change: '-0.15%',
      color: '#f87171',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/FTSE_Russell_logo.svg/1200px-FTSE_Russell_logo.svg.png',
      price: '8,012',
      data: generateChartData(8012, 28, -12),
    },
  ],
  Commodities: [
    {
      name: 'Gold',
      ticker: 'XAUUSD',
      change: '+0.42%',
      color: '#4ade80',
      logo: '',
      price: '$2,352',
      data: generateChartData(2352, 10, 10),
    },
    {
      name: 'Silver',
      ticker: 'XAGUSD',
      change: '+0.38%',
      color: '#4ade80',
      logo: '',
      price: '$29.18',
      data: generateChartData(29.18, 0.25, 0.12),
    },
    {
      name: 'Crude Oil',
      ticker: 'USOIL',
      change: '-0.27%',
      color: '#f87171',
      logo: '',
      price: '$76.22',
      data: generateChartData(76.22, 0.8, -0.2),
    },
    {
      name: 'Natural Gas',
      ticker: 'NATGAS',
      change: '+0.61%',
      color: '#4ade80',
      logo: '',
      price: '$2.18',
      data: generateChartData(2.18, 0.08, 0.015),
    },
  ],
};

// Update data and changes on load
Object.keys(marketData).forEach((category) => {
  marketData[category].forEach((item) => {
    const data = item.data;
    item.change = calculateChange(data);
    item.color = item.change.startsWith('+') ? '#4ade80' : '#f87171';
  });
});

const AssetIcon: React.FC<{ item: MarketItem }> = ({ item }) => {
  const [imageError, setImageError] = useState(false);

  if (!item.logo || imageError) {
    return (
      <span className="text-base font-bold text-slate-300">
        {item.ticker.slice(0, 2)}
      </span>
    );
  }

  return (
    <img
      src={item.logo}
      alt={item.name}
      className="w-8 h-8 object-contain"
      onError={() => setImageError(true)}
    />
  );
};

const DarkMarketSection: React.FC = () => {
  const [activeMarket, setActiveMarket] = useState<string>('Share CFDs');
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const marketTabs = Object.keys(marketData);

  // Generate mini sparkline points for SVG chart
  const generateSparklinePoints = (data: number[]) => {
    const points: any = [];
    const height = 40;
    const width = 80;

    const minValue = Math.min(...data);
    const maxValue = Math.max(...data);
    const range = maxValue - minValue;

    data.forEach((value, index) => {
      const x = (index / (data.length - 1)) * width;
      const y = height - ((value - minValue) / range) * height;
      points.push(`${x},${y}`);
    });

    return points.join(' ');
  };

  return (
    <section className="relative bg-slate-950 text-white overflow-hidden min-h-fit py-16">
      {/* Lighter glassmorphism background elements */}
      <div className="absolute top-40 -left-40 w-60 h-60 bg-blue-500/15 blur-3xl rounded-full" />
      <div className="absolute bottom-20 -right-40 w-80 h-80 bg-cyan-500/12 blur-3xl rounded-full" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-slate-700/15 blur-3xl rounded-full" />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-transparent bg-blue-500 bg-clip-text">
              Trade Global Markets
            </span>
            <span className="block text-white">at the Lowest Costs!</span>
          </h2>
        </div>

        {/* Tab Navigation with Enhanced Glassmorphism */}
        <div className="relative mb-10">
          <div className="flex justify-center space-x-1 bg-slate-800/40 backdrop-blur-2xl border border-slate-700/60 rounded-2xl p-2 max-w-fit mx-auto shadow-xl">
            {marketTabs.map((tab, index) => (
              <button
                key={tab}
                ref={(el) => (tabRefs.current[index] = el)}
                className={`relative px-6 py-3 text-sm font-medium whitespace-nowrap rounded-xl transition-all duration-500 ease-out ${
                  activeMarket === tab
                    ? 'text-white bg-slate-700/60 shadow-lg border border-slate-600/50 backdrop-blur-sm'
                    : 'text-slate-400 hover:text-slate-300 hover:bg-slate-700/30'
                }`}
                onClick={() => setActiveMarket(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Market Data Container with Lighter Glassmorphism */}
        <div className="relative">
          {/* Multi-layer glassmorphism background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/5 to-slate-950/50 backdrop-blur-3xl border border-slate-700/50 rounded-2xl shadow-xl"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-cyan-400/5 rounded-2xl"></div>

          {/* Content with transition */}
          <div className="relative p-6">
            <div className="grid gap-3 transition-all duration-500">
              {marketData[activeMarket as keyof typeof marketData]?.map(
                (item, i) => (
                  <div
                    key={`${activeMarket}-${i}`}
                    className="group flex justify-between items-center p-4 rounded-xl bg-slate-900/40 backdrop-blur-sm border border-slate-700/40 hover:border-slate-600/60 hover:bg-slate-700/40 transition-all duration-300 shadow-md"
                  >
                    <div className="flex items-center space-x-4">
                      {/* Asset Icon with image or symbol fallback */}
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-slate-800/30 to-slate-900/60 backdrop-blur-sm border border-slate-600/40 flex items-center justify-center shadow-md overflow-hidden">
                        <AssetIcon item={item} />
                      </div>

                      {/* Asset Info */}
                      <div>
                        <h4 className="font-semibold text-white text-base mb-0.5">
                          {item.name}
                        </h4>
                        <span className="text-slate-500 text-xs">
                          {item.ticker}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-6">
                      {/* Price */}
                      <div className="text-right">
                        <div className="text-white font-medium text-base">
                          {item.price}
                        </div>
                      </div>

                      {/* Enhanced Mini Chart */}
                      <div className="w-20 h-10 relative">
                        <svg
                          width="80"
                          height="40"
                          className="overflow-visible"
                        >
                          <defs>
                            <linearGradient
                              id={`gradient-${activeMarket.replace(
                                /\s+/g,
                                '',
                              )}-${i}`} // Remove spaces from activeMarket
                              x1="0%"
                              y1="0%"
                              x2="0%"
                              y2="100%"
                            >
                              <stop
                                offset="0%"
                                stopColor={item.color}
                                stopOpacity="0.3"
                              />
                              <stop
                                offset="100%"
                                stopColor={item.color}
                                stopOpacity="0.1"
                              />
                            </linearGradient>
                          </defs>

                          {/* Area fill */}
                          <polygon
                            fill={`url(#gradient-${activeMarket.replace(
                              /\s+/g,
                              '',
                            )}-${i})`}
                            points={`0,40 ${generateSparklinePoints(
                              item.data,
                            )} 80,40`}
                          />

                          {/* Line */}
                          <polyline
                            fill="none"
                            stroke={item.color}
                            strokeWidth="2"
                            points={generateSparklinePoints(item.data)}
                            style={{
                              filter: `drop-shadow(0 1px 2px ${item.color}40)`,
                            }}
                          />
                        </svg>
                      </div>

                      {/* Change Percentage */}
                      <div className="text-right min-w-[70px]">
                        <div
                          className={`text-base font-semibold ${
                            item.change.startsWith('-')
                              ? 'text-red-400'
                              : 'text-green-400'
                          }`}
                        >
                          {item.change}
                        </div>
                      </div>
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DarkMarketSection;
