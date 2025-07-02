import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Target, 
  TrendingUp, 
  Heart, 
  CheckCircle, 
  Star, 
  Users, 
  Clock, 
  Zap,
  ArrowRight,
  Quote,
  Award,
  Shield,
  MessageCircle,
  Home,
  ArrowUp
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const navigate = useNavigate();
  const [activeService, setActiveService] = useState<number | null>(null);

  const services = [
    {
      title: '行動変容支援',
      subtitle: '「変わりたい」を「変われる」に',
      description: '頭では分かってるのに行動できない。そんなあなたの心の壁を取り除き、確実に一歩を踏み出せるようサポートします。',
      icon: Target,
      color: '#e53935',
      features: [
        '目標設定とアクションプランの作成',
        '行動の障壁となる思考パターンの特定',
        '小さな成功体験の積み重ね',
        '継続的なモチベーション管理'
      ],
      benefits: [
        '3ヶ月で行動力が劇的に向上',
        '先延ばし癖が改善される',
        '自信を持って挑戦できるようになる'
      ],
      testimonial: {
        text: "今まで何をやっても続かなかった私が、3ヶ月で人生が変わりました。",
        author: "30代 会社員 T.Mさん"
      }
    },
    {
      title: '自己管理強化',
      subtitle: '継続する力を身につける',
      description: '三日坊主から卒業し、目標達成に不可欠な「継続する力」を科学的アプローチで育てます。',
      icon: TrendingUp,
      color: '#d4af37',
      features: [
        '習慣化のメカニズム理解',
        '時間管理とエネルギー管理',
        'セルフモニタリング技術',
        '挫折からの立ち直り方'
      ],
      benefits: [
        '習慣化成功率90%以上',
        '時間の使い方が劇的に改善',
        'ストレス耐性が向上'
      ],
      testimonial: {
        text: "毎日の習慣が身につき、仕事もプライベートも充実しています。",
        author: "40代 経営者 K.Sさん"
      }
    },
    {
      title: '心と身体のサポート',
      subtitle: '内面と外見の両方から変革',
      description: 'フィジーク経験を活かし、メンタルとフィジカルの両面から統合的なセルフマネジメントを支援します。',
      icon: Heart,
      color: '#4caf50',
      features: [
        'メンタルとフィジカルの相互作用理解',
        'ストレス管理とリカバリー',
        'パフォーマンス向上のための生活習慣',
        '自信構築のためのボディメイク'
      ],
      benefits: [
        '心身ともに健康的な変化',
        '自信と魅力が大幅アップ',
        'エネルギーレベルが向上'
      ],
      testimonial: {
        text: "見た目も心も変わって、周りからの反応が全然違います。",
        author: "20代 フリーランス A.Hさん"
      }
    }
  ];

  const successStories = [
    {
      before: "毎日同じことの繰り返しで、将来に不安を感じていた",
      after: "新しい挑戦を続け、理想の自分に近づいている",
      period: "6ヶ月",
      age: "30代男性"
    },
    {
      before: "何をやっても続かず、自分に自信が持てなかった",
      after: "習慣化に成功し、目標を次々と達成している",
      period: "3ヶ月",
      age: "20代女性"
    },
    {
      before: "仕事のストレスで心身ともに疲弊していた",
      after: "ストレス管理ができ、エネルギッシュに過ごしている",
      period: "4ヶ月",
      age: "40代男性"
    }
  ];

  const pricingPlans = [
    {
      name: "スタンダード",
      price: "月額 30,000円",
      duration: "3ヶ月コース",
      features: [
        "月2回のセッション（60分）",
        "24時間チャットサポート",
        "目標設定・進捗管理",
        "習慣化サポート"
      ],
      popular: false
    },
    {
      name: "プレミアム",
      price: "月額 50,000円",
      duration: "6ヶ月コース",
      features: [
        "月4回のセッション（60分）",
        "24時間チャットサポート",
        "目標設定・進捗管理",
        "習慣化サポート",
        "ボディメイク指導",
        "栄養・睡眠アドバイス"
      ],
      popular: true
    },
    {
      name: "VIP",
      price: "月額 80,000円",
      duration: "12ヶ月コース",
      features: [
        "週1回のセッション（90分）",
        "24時間優先チャットサポート",
        "完全オーダーメイドプログラム",
        "ライフスタイル全般サポート",
        "緊急時の電話相談",
        "成果保証制度"
      ],
      popular: false
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 mobile-safe-area">
      {/* ヒーローセクション - 心理的訴求強化 */}
      <section className="relative py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        {/* 背景効果 */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-[#d4af37]/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-[#e53935]/10 rounded-full blur-3xl animate-pulse animation-delay-1000" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 sm:mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#e53935]/20 border border-[#e53935]/50 rounded-full text-[#e53935] text-sm font-bold mb-4">
              <Zap size={16} className="animate-pulse" />
              今なら初回セッション無料
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-[#d4af37] via-[#ffd700] to-[#d4af37] bg-clip-text text-transparent">
              SERVICES
            </h1>
            <p className="text-xl sm:text-2xl text-[#d4af37] font-semibold mb-4">
              あなたの"変わりたい"を現実にする
            </p>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              200名以上の人生を変えてきた実績<br />
              満足度98%のパーソナルコーチング
            </p>
          </motion.div>

          {/* 社会的証明 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-8 sm:mb-12"
          >
            <div className="flex items-center gap-2 text-[#d4af37]">
              <Users size={20} />
              <span className="font-bold">200+</span>
              <span className="text-gray-300">実績</span>
            </div>
            <div className="flex items-center gap-2 text-[#d4af37]">
              <Star size={20} />
              <span className="font-bold">98%</span>
              <span className="text-gray-300">満足度</span>
            </div>
            <div className="flex items-center gap-2 text-[#d4af37]">
              <Award size={20} />
              <span className="font-bold">90%</span>
              <span className="text-gray-300">目標達成率</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* サービス詳細セクション - インタラクティブ強化 */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#d4af37] mb-4">
              3つの専門サポート
            </h2>
            <p className="text-lg text-gray-300">
              あなたの状況に合わせて最適なサポートを提供します
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              const isActive = activeService === index;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  onHoverStart={() => setActiveService(index)}
                  onHoverEnd={() => setActiveService(null)}
                  className={`relative p-6 sm:p-8 rounded-2xl border transition-all duration-500 cursor-pointer group ${
                    isActive 
                      ? 'bg-gradient-to-br from-white/10 to-white/5 border-[#d4af37]/60 transform scale-105' 
                      : 'bg-white/5 border-white/10 hover:border-[#d4af37]/40'
                  }`}
                >
                  {/* アイコンとタイトル */}
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div 
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mr-4"
                      style={{ backgroundColor: `${service.color}20`, border: `2px solid ${service.color}` }}
                    >
                      <IconComponent size={24} style={{ color: service.color }} />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white">
                        {service.title}
                      </h3>
                      <p className="text-sm text-[#d4af37] font-medium">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-6 text-base sm:text-lg">
                    {service.description}
                  </p>

                  {/* 特徴 */}
                  <div className="mb-6">
                    <h4 className="text-[#d4af37] font-semibold mb-3">サポート内容</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-sm sm:text-base">
                          <CheckCircle size={16} className="text-[#d4af37] mr-2 mt-1 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* ベネフィット */}
                  <div className="mb-6">
                    <h4 className="text-[#d4af37] font-semibold mb-3">期待できる効果</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start text-sm sm:text-base">
                          <Star size={16} className="text-[#ffd700] mr-2 mt-1 flex-shrink-0" />
                          <span className="text-gray-300">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* お客様の声 */}
                  <div className="bg-gradient-to-r from-[#d4af37]/10 to-transparent p-4 rounded-lg border-l-4 border-[#d4af37]">
                    <div className="flex items-start gap-2 mb-2">
                      <Quote size={16} className="text-[#d4af37] mt-1 flex-shrink-0" />
                      <p className="text-sm italic text-gray-300">
                        {service.testimonial.text}
                      </p>
                    </div>
                    <p className="text-xs text-[#d4af37] text-right">
                      - {service.testimonial.author}
                    </p>
                  </div>

                  {/* ホバー効果 */}
                  <div className={`absolute inset-0 rounded-2xl transition-opacity duration-500 pointer-events-none ${
                    isActive ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div 
                      className="absolute inset-0 rounded-2xl blur-xl opacity-30"
                      style={{ backgroundColor: service.color }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 成功事例セクション */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#d4af37]/5 to-[#e53935]/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#d4af37] mb-4">
              変化の実例
            </h2>
            <p className="text-lg text-gray-300">
              実際にコーチングを受けた方々の変化をご紹介
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="p-6 sm:p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-[#d4af37]/40 transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#e53935]/20 border border-[#e53935]/50 rounded-full text-[#e53935] text-xs font-bold mb-4">
                    <Clock size={12} />
                    {story.period}で変化
                  </div>
                  <p className="text-sm text-[#d4af37] font-medium">{story.age}</p>
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                    <h4 className="text-red-400 font-semibold mb-2 text-sm">BEFORE</h4>
                    <p className="text-gray-300 text-sm">{story.before}</p>
                  </div>

                  <div className="flex justify-center">
                    <ArrowRight className="text-[#d4af37]" size={24} />
                  </div>

                  <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                    <h4 className="text-green-400 font-semibold mb-2 text-sm">AFTER</h4>
                    <p className="text-gray-300 text-sm">{story.after}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 料金プランセクション */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#d4af37] mb-4">
              料金プラン
            </h2>
            <p className="text-lg text-gray-300">
              あなたの目標と予算に合わせてお選びください
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className={`relative p-6 sm:p-8 rounded-2xl border transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-[#d4af37]/20 to-[#ffd700]/20 border-[#d4af37]/60 transform scale-105' 
                    : 'bg-white/5 border-white/10 hover:border-[#d4af37]/40'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="px-4 py-1 bg-[#e53935] text-white text-xs font-bold rounded-full">
                      人気No.1
                    </div>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-3xl font-bold text-[#d4af37] mb-1">{plan.price}</div>
                  <p className="text-sm text-gray-400">{plan.duration}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle size={16} className="text-[#d4af37] mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => navigate('/contact')}
                  className={`w-full py-3 px-6 rounded-lg font-bold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-[#e53935] to-[#d4af37] text-white hover:from-[#d4af37] hover:to-[#e53935]'
                      : 'bg-gradient-to-r from-[#d4af37] to-[#ffd700] text-[#181818] hover:from-[#ffd700] hover:to-[#d4af37]'
                  }`}
                >
                  このプランで始める
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 保証・安心要素セクション */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#d4af37]/5 to-[#e53935]/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#d4af37] mb-4">
              安心の保証制度
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <div className="p-6 sm:p-8 bg-white/5 backdrop-blur-sm border border-[#d4af37]/20 rounded-2xl">
              <div className="flex items-center mb-4">
                <Shield className="text-[#d4af37] mr-3" size={24} />
                <h3 className="text-xl font-bold text-white">30日間返金保証</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                初回セッションから30日以内にご満足いただけない場合、全額返金いたします。
              </p>
            </div>

            <div className="p-6 sm:p-8 bg-white/5 backdrop-blur-sm border border-[#d4af37]/20 rounded-2xl">
              <div className="flex items-center mb-4">
                <MessageCircle className="text-[#d4af37] mr-3" size={24} />
                <h3 className="text-xl font-bold text-white">24時間サポート</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                セッション以外でも、チャットでいつでもご相談いただけます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 最終CTA */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="p-8 sm:p-12 bg-gradient-to-br from-[#e53935]/20 via-[#d4af37]/20 to-[#ffd700]/20 border border-[#e53935]/40 rounded-2xl text-center backdrop-blur-sm relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#e53935]/10 to-[#ffd700]/10 rounded-2xl blur-xl opacity-50" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#e53935]/20 border border-[#e53935]/50 rounded-full text-[#e53935] text-sm font-bold mb-6">
                <Zap size={16} className="animate-pulse" />
                今なら初回セッション無料（通常10,000円）
              </div>

              <h3 className="text-3xl sm:text-4xl font-bold text-[#d4af37] mb-4">
                人生を変える第一歩を、今すぐ
              </h3>
              
              <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
                200名以上の人生を変えてきた実績。<br />
                あなたの番です。
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  onClick={() => navigate('/contact')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-8 py-4 text-lg font-bold bg-gradient-to-r from-[#e53935] via-[#d4af37] to-[#ffd700] text-white rounded-full transition-all duration-300 hover:shadow-[0_12px_40px_rgba(229,57,53,0.4)] relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <Zap size={20} />
                    無料セッションを申し込む
                    <ArrowRight size={20} />
                  </span>
                </motion.button>
              </div>

              <div className="mt-6 text-sm text-gray-400">
                ✓ 無理な勧誘は一切ありません　✓ 秘密厳守　✓ 24時間以内返信
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ナビゲーションボタン */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center py-8 sm:py-12 px-4">
        <motion.button
          onClick={() => navigate('/main')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-3 px-8 py-4 text-lg font-bold bg-gradient-to-r from-[#d4af37] to-[#ffd700] text-[#181818] rounded-full transition-all duration-300 hover:shadow-[0_8px_32px_rgba(212,175,55,0.4)] mobile-touch-target"
        >
          <Home size={20} />
          HOMEに戻る
        </motion.button>
        
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-3 px-8 py-4 text-lg font-bold bg-transparent border-2 border-[#d4af37] text-[#d4af37] rounded-full transition-all duration-300 hover:bg-[#d4af37] hover:text-[#181818] mobile-touch-target"
        >
          <ArrowUp size={20} />
          ページトップへ
        </motion.button>
      </div>
    </div>
  );
};

export default ServicesPage;