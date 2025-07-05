import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
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
  ArrowUp,
} from "lucide-react";
import SEO from "../components/SEO";

const ServicesPage: React.FC = () => {
  const navigate = useNavigate();
  const [activeService, setActiveService] = useState<number | null>(null);

  const services = [
    {
      title: "行動変容支援",
      subtitle: "「変わりたい」を「変われる」に",
      description: `頭では分かってるのに行動できない。<br className="mobile-only-br"/>そんなあなたの心の壁を取り除き、<br className="mobile-only-br"/>確実に一歩を踏み出せるようサポートします。`,
      icon: Target,
      color: "#e53935",
      features: [
        "目標設定とアクションプランの作成",
        "行動の障壁となる思考パターンの特定",
        "小さな成功体験の積み重ね",
        "継続的なモチベーション管理",
      ],
      benefits: [
        "3ヶ月で行動力が劇的に向上",
        "先延ばし癖が改善される",
        "自信を持って挑戦できるようになる",
      ],
      testimonial: {
        text: "今まで何をやっても続かなかった私が、3ヶ月で人生が変わりました。",
        author: "30代 会社員 T.Mさん",
      },
    },
    {
      title: "自己管理強化",
      subtitle: "継続する力を身につける",
      description: `三日坊主から卒業し、<br className="mobile-only-br"/>目標達成に不可欠な「継続する力」を<br className="mobile-only-br"/>科学的アプローチで育てます。`,
      icon: TrendingUp,
      color: "#d4af37",
      features: [
        "習慣化のメカニズム理解",
        "時間管理とエネルギー管理",
        "セルフモニタリング技術",
        "挫折からの立ち直り方",
      ],
      benefits: [
        "習慣化成功率90%以上",
        "時間の使い方が劇的に改善",
        "ストレス耐性が向上",
      ],
      testimonial: {
        text: "毎日の習慣が身につき、仕事もプライベートも充実しています。",
        author: "40代 経営者 K.Sさん",
      },
    },
    {
      title: "心と身体のサポート",
      subtitle: "内面と外見の両方から変革",
      description: `筋トレや運動を通じて得た継続のコツを活かし、<br className="mobile-only-br"/>メンタルとフィジカルの両面から<br className="mobile-only-br"/>バランスの取れたサポートを提供します。`,
      icon: Heart,
      color: "#4caf50",
      features: [
        "メンタルとフィジカルの相互作用理解",
        "ストレス管理とリカバリー",
        "パフォーマンス向上のための生活習慣",
        "自信構築のためのボディメイク",
      ],
      benefits: [
        "心身ともに健康的な変化",
        "自信と魅力が大幅アップ",
        "エネルギーレベルが向上",
      ],
      testimonial: {
        text: "見た目も心も変わって、周りからの反応が全然違います。",
        author: "20代 フリーランス A.Hさん",
      },
    },
  ];

  const successStories = [
    {
      before: "毎日同じことの繰り返しで、将来に不安を感じていた",
      after: "新しい挑戦を続け、理想の自分に近づいている",
      period: "6ヶ月",
      age: "30代男性",
    },
    {
      before: "何をやっても続かず、自分に自信が持てなかった",
      after: "習慣化に成功し、目標を次々と達成している",
      period: "3ヶ月",
      age: "20代女性",
    },
    {
      before: "仕事のストレスで心身ともに疲弊していた",
      after: "ストレス管理ができ、エネルギッシュに過ごしている",
      period: "4ヶ月",
      age: "40代男性",
    },
  ];

  const pricingPlans = [
    {
      name: "ベーシック",
      price: "月額 15,000円",
      duration: "3ヶ月コース",
      features: [
        "月1回のセッション（60分）",
        "チャットサポート",
        "目標設定・進捗管理",
        "基本的な習慣化サポート",
      ],
      popular: false,
    },
    {
      name: "スタンダード",
      price: "月額 25,000円",
      duration: "6ヶ月コース",
      features: [
        "月2回のセッション（60分）",
        "24時間チャットサポート",
        "目標設定・進捗管理",
        "習慣化サポート",
        "継続的なモチベーション管理",
      ],
      popular: true,
    },
    {
      name: "プレミアム",
      price: "月額 40,000円",
      duration: "12ヶ月コース",
      features: [
        "月3回のセッション（90分）",
        "24時間優先チャットサポート",
        "完全オーダーメイドプログラム",
        "継続的なモチベーション管理",
        "成果保証制度",
      ],
      popular: false,
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 mobile-safe-area">
      <SEO
        title="コーチングサービス | 矢田谷充則の提供サービスと料金"
        description="矢田谷充則が提供する行動変容支援、自己管理強化、心と身体のサポートといったコーチングサービスの詳細と料金プランをご紹介します。あなたの「変わりたい」を現実にする最適なプランを見つけてください。"
        keywords="コーチングサービス, 料金プラン, 行動変容支援, 自己管理強化, 心と身体のサポート, 矢田谷充則, パーソナルコーチング, 目標達成, 習慣化, 筋トレ"
      />
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
            <p
              className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-10 leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: `あなたの目標とライフスタイルに合わせて、<br className="mobile-only-br"/>最適なプランをお選びいただけます。<br className="mobile-only-br"/>継続的なサポートで、確実な変化を実現します。`,
              }}
            />
          </motion.div>

          {/* 社会的証明 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-8 sm:mb-12"
          >
            <div className="flex items-center gap-2 text-[#d4af37]">
              <Target size={20} />
              <span className="font-bold">目標設定</span>
              <span className="text-gray-300">から実現まで</span>
            </div>
            <div className="flex items-center gap-2 text-[#d4af37]">
              <Heart size={20} />
              <span className="font-bold">心身両面</span>
              <span className="text-gray-300">のサポート</span>
            </div>
            <div className="flex items-center gap-2 text-[#d4af37]">
              <TrendingUp size={20} />
              <span className="font-bold">継続的な</span>
              <span className="text-gray-300">成長支援</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 料金プランセクション - 最初に表示 */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#d4af37] mb-4">
              料金プラン
            </h2>
            <p
              className="text-lg text-gray-300"
              dangerouslySetInnerHTML={{
                __html: `あなたの目標と予算に合わせて<br className="mobile-only-br"/>お選びください`,
              }}
            />
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
                    ? "bg-gradient-to-br from-[#d4af37]/20 to-[#ffd700]/20 border-[#d4af37]/60 transform scale-105"
                    : "bg-white/5 border-white/10 hover:border-[#d4af37]/40"
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
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  <div className="text-3xl font-bold text-[#d4af37] mb-1">
                    {plan.price}
                  </div>
                  <p className="text-sm text-gray-400">{plan.duration}</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#d4af37] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[#181818] font-bold text-sm">
                        ✓
                      </span>
                    </div>
                    <p
                      className="text-gray-300 text-sm sm:text-base"
                      dangerouslySetInnerHTML={{
                        __html: `継続的な習慣化と<br className="mobile-only-br"/>モチベーション維持のサポート`,
                      }}
                    />
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#d4af37] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[#181818] font-bold text-sm">
                        ✓
                      </span>
                    </div>
                    <p
                      className="text-gray-300 text-sm sm:text-base"
                      dangerouslySetInnerHTML={{
                        __html: `実践的なセルフマネジメント<br className="mobile-only-br"/>手法の指導`,
                      }}
                    />
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#d4af37] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[#181818] font-bold text-sm">
                        ✓
                      </span>
                    </div>
                    <p
                      className="text-gray-300 text-sm sm:text-base"
                      dangerouslySetInnerHTML={{
                        __html: `個人の成長目標に合わせた<br className="mobile-only-br"/>カスタマイズ`,
                      }}
                    />
                  </div>
                </div>

                <button
                  onClick={() => navigate("/contact")}
                  className={`w-full py-3 px-6 rounded-lg font-bold transition-all duration-300 ${
                    plan.popular
                      ? "bg-gradient-to-r from-[#e53935] to-[#d4af37] text-white hover:from-[#d4af37] hover:to-[#e53935]"
                      : "bg-gradient-to-r from-[#d4af37] to-[#ffd700] text-[#181818] hover:from-[#ffd700] hover:to-[#d4af37]"
                  }`}
                >
                  このプランで始める
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* オプションサービスセクション */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#d4af37]/5 to-[#e53935]/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#d4af37] mb-4">
              オプションサービス
            </h2>
            <p
              className="text-lg text-gray-300"
              dangerouslySetInnerHTML={{
                __html: `より深いサポートを<br className="mobile-only-br"/>ご希望の方へ`,
              }}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="p-6 sm:p-8 bg-white/5 backdrop-blur-sm border border-[#d4af37]/20 rounded-2xl"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#d4af37]/20 border-2 border-[#d4af37] flex items-center justify-center mr-4">
                <TrendingUp size={24} className="text-[#d4af37]" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  ボディメイク指導
                </h3>
                <p
                  className="text-[#d4af37] font-medium"
                  dangerouslySetInnerHTML={{
                    __html: `趣味で続けている筋トレの経験を活かした<br className="mobile-only-br"/>実践的なアドバイス`,
                  }}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="text-[#d4af37] font-semibold mb-3">指導内容</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• 個人に合わせたトレーニングプログラム作成</li>
                  <li>• フォーム指導と怪我予防のアドバイス</li>
                  <li>• 継続しやすい習慣化のコツ</li>
                  <li>• モチベーション維持のサポート</li>
                  <li>• 食事とトレーニングのバランス調整</li>
                </ul>
              </div>
              <div>
                <h4 className="text-[#d4af37] font-semibold mb-3">料金</h4>
                <div className="text-2xl font-bold text-[#d4af37] mb-2">
                  月額 +10,000円
                </div>
                <p className="text-gray-300 text-sm mb-4">
                  どのプランにも追加可能です
                </p>
                <div className="bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-lg p-3">
                  <p className="text-[#d4af37] text-sm font-medium">
                    💪 趣味で続けている筋トレの経験を活かした実践的なアドバイス
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={() => navigate("/contact")}
                className="px-6 py-3 bg-gradient-to-r from-[#d4af37] to-[#ffd700] text-[#181818] font-bold rounded-lg transition-all duration-300 hover:from-[#ffd700] hover:to-[#d4af37]"
              >
                オプション追加を相談する
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* お客様の声・ビフォーアフター事例セクション */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#d4af37]/5 to-[#e53935]/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#d4af37] mb-4">
              お客様の声・ビフォーアフター事例
            </h2>
            <p
              className="text-lg text-gray-300"
              dangerouslySetInnerHTML={{
                __html: `実際にコーチングを受けた方々の<br className="mobile-only-br"/>変化をご紹介`,
              }}
            />
          </div>

          <div className="space-y-12">
            {/* Nさん */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="p-6 sm:p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-[#d4af37] mb-2">
                  Nさん（30代・男性）｜自分を責めていた若手公務員
                </h3>
              </div>

              <div className="space-y-6 mb-6">
                <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                  <h4 className="text-red-400 font-semibold mb-3 text-lg">
                    Before（セッション前）
                  </h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li
                      dangerouslySetInnerHTML={{
                        __html: `•<br className="mobile-only-br"/>「自分のことがわかってない」<br className="mobile-only-br"/>「長所が見えない」という<br className="mobile-only-br"/>自己理解の不足。`,
                      }}
                    />
                    <li
                      dangerouslySetInnerHTML={{
                        __html: `•<br className="mobile-only-br"/>真面目で責任感が強い一方で、<br className="mobile-only-br"/>コミュニケーションに苦手意識があり、<br className="mobile-only-br"/>言葉に詰まることもしばしば。`,
                      }}
                    />
                    <li
                      dangerouslySetInnerHTML={{
                        __html: `•<br className="mobile-only-br"/>面接などでは「体力」「継続力」といった<br className="mobile-only-br"/>無難な回答しかできず、<br className="mobile-only-br"/>「しっくりこない」と感じていた。`,
                      }}
                    />
                    <li
                      dangerouslySetInnerHTML={{
                        __html: `•<br className="mobile-only-br"/>「自分にはユーモアがない」という<br className="mobile-only-br"/>リミッティングビリーフに縛られていた。`,
                      }}
                    />
                  </ul>
                </div>

                {/* 矢印セクション */}
                <div className="flex justify-center items-center">
                  <div className="flex flex-col items-center gap-2 px-4 py-2 bg-gradient-to-b from-red-500/20 to-green-500/20 border border-[#d4af37]/50 rounded-full">
                    <ArrowRight
                      className="text-[#d4af37] animate-pulse rotate-90"
                      size={20}
                    />
                    <span className="text-[#d4af37] font-bold text-sm">
                      コーチングによる変化
                    </span>
                    <ArrowRight
                      className="text-[#d4af37] animate-pulse rotate-90"
                      size={20}
                    />
                  </div>
                </div>

                <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                  <h4 className="text-green-400 font-semibold mb-3 text-lg">
                    After（セッション後）
                  </h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li
                      dangerouslySetInnerHTML={{
                        __html: `•<br className="mobile-only-br"/>野球経験から「仲間を助けたい」という<br className="mobile-only-br"/>他者貢献の本質に気づき、<br className="mobile-only-br"/>自分の強みを再発見。`,
                      }}
                    />
                    <li
                      dangerouslySetInnerHTML={{
                        __html: `•<br className="mobile-only-br"/>心配性＝準備力、慎重さ＝冷静な判断力として<br className="mobile-only-br"/>"短所を長所に再定義"。`,
                      }}
                    />
                    <li
                      dangerouslySetInnerHTML={{
                        __html: `•<br className="mobile-only-br"/>「人前で話す」ではなく<br className="mobile-only-br"/>「1対1で堂々と話せるようになりたい」という<br className="mobile-only-br"/>現実的な目標へ軸が変化。`,
                      }}
                    />
                    <li
                      dangerouslySetInnerHTML={{
                        __html: `•<br className="mobile-only-br"/>「質問力を鍛える」ことの意味に気づき、<br className="mobile-only-br"/>コミュニケーションへの向き合い方が変化。`,
                      }}
                    />
                    <li
                      dangerouslySetInnerHTML={{
                        __html: `•<br className="mobile-only-br"/>「頼られる存在になりたい」と<br className="mobile-only-br"/>自信を持って語れるように。`,
                      }}
                    />
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-lg">
                  <h4 className="text-[#d4af37] font-semibold mb-2">
                    印象的な台詞
                  </h4>
                  <blockquote className="text-gray-300 italic text-sm">
                    「これって強みになるんですか…？ただの心配性やと思ってました」
                  </blockquote>
                </div>

                <div className="p-4 bg-white/5 border border-white/20 rounded-lg">
                  <h4 className="text-white font-semibold mb-2">現在の様子</h4>
                  <p className="text-gray-300 text-sm">
                    職場で後輩から相談される場面が増え、自己肯定感が上がっている。自分の"取扱説明書"が分かったことで、人との関係性にも余裕が出てきた。
                  </p>
                </div>

                <div className="p-4 bg-[#e53935]/10 border border-[#e53935]/30 rounded-lg">
                  <h4 className="text-[#e53935] font-semibold mb-2">
                    コーチの関わりについて
                  </h4>
                  <p className="text-gray-300 text-sm">
                    「話を聴くだけじゃなく、思考の奥にある価値観まで一緒に掘ってくれる。あのセッションは宝物です」
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Iさん */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="p-6 sm:p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-[#d4af37] mb-2">
                  Iさん（40代・男性）｜家庭と仕事の間で悩む中間管理職
                </h3>
              </div>

              <div className="space-y-6 mb-6">
                <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                  <h4 className="text-red-400 font-semibold mb-3 text-lg">
                    Before（セッション前）
                  </h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li
                      dangerouslySetInnerHTML={{
                        __html: `•<br className="mobile-only-br"/>「何となく分かってるつもり」だった思考が、<br className="mobile-only-br"/>実は整理されていなかった。`,
                      }}
                    />
                    <li
                      dangerouslySetInnerHTML={{
                        __html: `•<br className="mobile-only-br"/>家庭・仕事・自分の今後に対するモヤモヤが重なり、<br className="mobile-only-br"/>優先順位や判断軸が不明確な状態。`,
                      }}
                    />
                  </ul>
                </div>

                {/* 矢印セクション */}
                <div className="flex justify-center items-center">
                  <div className="flex flex-col items-center gap-2 px-4 py-2 bg-gradient-to-b from-red-500/20 to-green-500/20 border border-[#d4af37]/50 rounded-full">
                    <ArrowRight
                      className="text-[#d4af37] animate-pulse rotate-90"
                      size={20}
                    />
                    <span className="text-[#d4af37] font-bold text-sm">
                      コーチングによる変化
                    </span>
                    <ArrowRight
                      className="text-[#d4af37] animate-pulse rotate-90"
                      size={20}
                    />
                  </div>
                </div>

                <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                  <h4 className="text-green-400 font-semibold mb-3 text-lg">
                    After（セッション後）
                  </h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li
                      dangerouslySetInnerHTML={{
                        __html: `•<br className="mobile-only-br"/>「自分を見つめ直す時間は本当に大切だ」と痛感。`,
                      }}
                    />
                    <li
                      dangerouslySetInnerHTML={{
                        __html: `•<br className="mobile-only-br"/>長年曖昧だった価値観や方向性が言語化され、<br className="mobile-only-br"/>思考がスッキリ。`,
                      }}
                    />
                    <li
                      dangerouslySetInnerHTML={{
                        __html: `•<br className="mobile-only-br"/>コーチング後、「その日から即実践」と<br className="mobile-only-br"/>行動変容が見られた。`,
                      }}
                    />
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-lg">
                  <h4 className="text-[#d4af37] font-semibold mb-2">
                    印象的な台詞
                  </h4>
                  <blockquote className="text-gray-300 italic text-sm">
                    「やたさんの変わりようにも驚いた。昔のギラギラがなくなってて、これがコーチングの力なんやなって思った」
                  </blockquote>
                </div>

                <div className="p-4 bg-white/5 border border-white/20 rounded-lg">
                  <h4 className="text-white font-semibold mb-2">現在の様子</h4>
                  <p className="text-gray-300 text-sm">
                    キャリアアップを目指し、試験勉強と行動計画を立てて実践中。変化に驚いた妻からも「本気なんやな」と応援の声。
                  </p>
                </div>

                <div className="p-4 bg-[#e53935]/10 border border-[#e53935]/30 rounded-lg">
                  <h4 className="text-[#e53935] font-semibold mb-2">
                    コーチの関わりについて
                  </h4>
                  <p className="text-gray-300 text-sm">
                    「対話を通じて丁寧に話を深掘ってくれるから、頭が整理されて迷いが消えていく。感覚じゃなく"納得"できたのが良かった」
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Mさん */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="p-6 sm:p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-[#d4af37] mb-2">
                  Mさん（40代・男性）｜将来への不安と人間関係に悩む現バス運転手
                </h3>
              </div>

              <div className="space-y-6 mb-6">
                <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                  <h4 className="text-red-400 font-semibold mb-3 text-lg">
                    Before（セッション前）
                  </h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li
                      dangerouslySetInnerHTML={{
                        __html: `•<br className="mobile-only-br"/>転職を目指すも不採用。<br className="mobile-only-br"/>「年齢的にもう無理かも」という諦めが先行。`,
                      }}
                    />
                    <li
                      dangerouslySetInnerHTML={{
                        __html: `•<br className="mobile-only-br"/>住宅ローン、発達障害のある娘の育児、<br className="mobile-only-br"/>人間関係と課題が山積みで、<br className="mobile-only-br"/>どこから動いていいか分からない状態。`,
                      }}
                    />
                  </ul>
                </div>

                {/* 矢印セクション */}
                <div className="flex justify-center items-center">
                  <div className="flex flex-col items-center gap-2 px-4 py-2 bg-gradient-to-b from-red-500/20 to-green-500/20 border border-[#d4af37]/50 rounded-full">
                    <ArrowRight
                      className="text-[#d4af37] animate-pulse rotate-90"
                      size={20}
                    />
                    <span className="text-[#d4af37] font-bold text-sm">
                      コーチングによる変化
                    </span>
                    <ArrowRight
                      className="text-[#d4af37] animate-pulse rotate-90"
                      size={20}
                    />
                  </div>
                </div>

                <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                  <h4 className="text-green-400 font-semibold mb-3 text-lg">
                    After（セッション後）
                  </h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li
                      dangerouslySetInnerHTML={{
                        __html: `•<br className="mobile-only-br"/>「強みを活かして人脈を広げる」という<br className="mobile-only-br"/>突破口を発見。`,
                      }}
                    />
                    <li
                      dangerouslySetInnerHTML={{
                        __html: `•<br className="mobile-only-br"/>セッション当日に迷っていた採用担当者へ連絡→<br className="mobile-only-br"/>即行動に移し、日程調整まで完了。`,
                      }}
                    />
                    <li
                      dangerouslySetInnerHTML={{
                        __html: `•<br className="mobile-only-br"/>「目標を高く設定するだけで、<br className="mobile-only-br"/>考え方も行動もガラッと変わる」と自覚。`,
                      }}
                    />
                    <li
                      dangerouslySetInnerHTML={{
                        __html: `•<br className="mobile-only-br"/>家族にもセッション内容を共有し、<br className="mobile-only-br"/>妻からも「ちゃんと考えてるやん」と<br className="mobile-only-br"/>前向きな反応が得られた。`,
                      }}
                    />
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-lg">
                  <h4 className="text-[#d4af37] font-semibold mb-2">
                    印象的な台詞
                  </h4>
                  <blockquote className="text-gray-300 italic text-sm">
                    「なんか、想像もつかん方向から解決策が出てくる気がするねん」
                  </blockquote>
                </div>

                <div className="p-4 bg-white/5 border border-white/20 rounded-lg">
                  <h4 className="text-white font-semibold mb-2">現在の様子</h4>
                  <p className="text-gray-300 text-sm">
                    転職の選択肢を広げるべく人脈構築を継続中。数人の元同僚との再接触も成功。「また迷ったら頼むわ」と継続的な自己変革に前向き。
                  </p>
                </div>

                <div className="p-4 bg-[#e53935]/10 border border-[#e53935]/30 rounded-lg">
                  <h4 className="text-[#e53935] font-semibold mb-2">
                    コーチの関わりについて
                  </h4>
                  <p className="text-gray-300 text-sm">
                    「"やる気出せ"じゃなくて、"こう動けるやろ"って道筋を一緒に作ってくれた。コーチングってこういうことかと実感した」
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-gray-400">
              ※すべて本人の同意のもと、内容の一部を再構成して掲載しています。
            </p>
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
                フィジーク経験とコーチング技術を組み合わせた
                <br className="mobile-only-br" />
                独自のアプローチでサポートします。
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  onClick={() => navigate("/contact")}
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
          onClick={() => navigate("/main")}
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
