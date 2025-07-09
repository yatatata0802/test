import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, ArrowUp, Target, Eye, Zap, Users } from "lucide-react";
import VisualGuide from "../components/ui/VisualGuide";
import ParticleBackground from "../components/ParticleBackground";
import SEO from "../components/SEO";

const WhatIsCoachingPage: React.FC = () => {
  const navigate = useNavigate();

  const sections = [
    {
      title: "コーチングとは",
      icon: Target,
      content: [
        `コーチングとは、自分の中にある"本音"を引き出す対話の技術です。\n\n本当は気づいているはずなんです。このままじゃ、何か違うって。\nでも、どう変えればいいのかは自分でもわからない。\nその"もやもや"を、ちゃんと形にしていくのがコーチングです。`,
      ],
    },
    {
      title: "コンサルとの違い",
      icon: Eye,
      content: [
        `コンサルは、やり方や答えを与えてくれます。\nでも、コーチングは問いかけます。\n\n「正解」より、「本音」。\n「こうすべき」より、「どうしたい？」\n\n主役は、いつだってあなた自身。\n他人の人生じゃなく、"自分の人生"を取り戻すプロセス。`,
      ],
    },
    {
      title: "コーチングを受けると、どうなる？",
      icon: Zap,
      content: [
        `「ほんまは、こう生きたかったんや」って、自分の本音に気づけるようになる。\n\n自己理解が深まり、なぜしんどかったのか、どう生きたいのかが、ハッキリしてくる。\n\nゴールが明確になり、行動が加速する。\n\n成長が習慣化し、淡々と前に進める自分になってる。`,
      ],
    },
    {
      title: "最後に",
      icon: Users,
      content: [
        `🔥 このまま終わらせますか？\n\n毎日同じことを繰り返して、「こんなはずじゃなかった」と後悔する人生を。\n\nそれとも、今すぐ行動を起こして、「やっぱりやってよかった」と言える人生を選びますか？\n\n⏰ 人生を変えるタイミングは、いつだって「今」。`,
      ],
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] text-white header-safe-padding relative overflow-hidden">
      <SEO
        title="コーチングとは？ | 矢田谷充則のパーソナルコーチング"
        description="矢田谷充則がコーチングの真髄を解説。コンサルティングとの違い、コーチングで得られる変化、そして「変わりたい」あなたへのメッセージを深く掘り下げます。"
        keywords="コーチングとは, コーチング, パーソナルコーチング, 矢田谷充則, コンサルティング, 自己理解, 目標達成, 行動変容, 変わりたい"
      />
      {/* Enhanced Background Effects */}
      <ParticleBackground />

      {/* Additional Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#d4af37]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#e53935]/5 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#ffd700]/5 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="max-w-5xl mx-auto px-8 relative z-20 md:px-4">
        {/* Enhanced Hero Section */}
        <motion.section
          className="text-center py-12 sm:py-16 md:py-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <VisualGuide type="pulse-dot" className="mx-auto mb-6" />
          <motion.h1
            className="text-6xl font-bold text-[#d4af37] mb-4 font-serif md:text-4xl"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            What's Coaching?
          </motion.h1>
          <motion.p
            className="text-2xl text-gray-300 mb-12 font-serif md:text-xl md:mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            魅セルジブン×踊ルココロ 〜人生をデザインする〜
          </motion.p>
        </motion.section>

        {/* Enhanced Content Sections */}
        <div className="space-y-16 md:space-y-8">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              className={`p-8 md:p-6 backdrop-blur-sm rounded-2xl relative shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-500 ${
                index === sections.length - 1
                  ? "bg-gradient-to-br from-[#e53935]/10 via-[#d4af37]/5 to-[#e53935]/10 border-2 border-[#e53935]/30 hover:border-[#e53935]/50 hover:scale-1.02"
                  : "bg-white/5 border border-[#d4af37]/20 hover:border-[#d4af37]/40 hover:y-[-5px]"
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              whileHover={
                index === sections.length - 1
                  ? { scale: 1.02 }
                  : { y: -5, scale: 1.02 }
              }
            >
              <VisualGuide type="glow-border" delay={index * 0.3}>
                <div className="flex items-center mb-6">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                    className="mr-4"
                  >
                    <section.icon size={32} className="text-[#d4af37]" />
                  </motion.div>
                  <h2 className="text-4xl font-bold text-[#d4af37] font-serif md:text-2xl">
                    {section.title}
                  </h2>
                </div>
              </VisualGuide>

              <motion.div
                className="text-sm text-gray-200 leading-normal space-y-4 md:text-base text-center max-w-xs mx-auto jp-text-optimal"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.2 + 0.3, duration: 0.8 }}
              >
                {section.content.map((line, lineIndex) => (
                  <motion.p
                    key={lineIndex}
                    className={`${line === "" ? "h-2" : ""} ${
                      index === sections.length - 1 &&
                      lineIndex === section.content.length - 1
                        ? "text-[#e53935] font-bold text-xl"
                        : "text-gray-200"
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.2 + lineIndex * 0.1,
                      duration: 0.5,
                    }}
                    dangerouslySetInnerHTML={{
                      __html: line.replace(/\n/g, '<br/>'),
                    }}
                  />
                ))}
              </motion.div>

              {index === sections.length - 1 && (
                <motion.div
                  className="mt-8"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  <VisualGuide type="attention-grabber" delay={0.3}>
                    <motion.button
                      onClick={() => navigate("/contact")}
                      className="flex items-center gap-3 px-10 py-4 text-lg font-bold bg-gradient-to-r from-[#d4af37] to-[#ffd700] text-[#181818] border-none rounded-full cursor-pointer transition-all duration-300 hover:from-[#fffbe6] hover:to-[#ffd700] hover:text-[#d4af37] hover:transform hover:scale-[1.07] hover:-translate-y-0.5"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Zap size={20} />
                      無料相談を申し込む
                    </motion.button>
                  </VisualGuide>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Enhanced Navigation Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center py-12 sm:py-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <VisualGuide type="arrow-right" delay={0.2}>
            <motion.button
              onClick={() => navigate("/main")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-8 py-4 text-lg font-bold bg-gradient-to-r from-[#d4af37] to-[#ffd700] text-[#181818] rounded-full transition-all duration-300 hover:shadow-[0_8px_32px_rgba(212,175,55,0.4)] mobile-touch-target"
            >
              <Home size={20} />
              HOMEに戻る
            </motion.button>
          </VisualGuide>

          <VisualGuide type="arrow-down" delay={0.4}>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-8 py-4 text-lg font-bold bg-transparent border-2 border-[#d4af37] text-[#d4af37] rounded-full transition-all duration-300 hover:bg-[#d4af37] hover:text-[#181818] mobile-touch-target"
            >
              <ArrowUp size={20} />
              ページトップへ
            </motion.button>
          </VisualGuide>
        </motion.div>

        <div className="h-20"></div>
      </div>

      <style>{`
        @keyframes lightParticleFloat {
          0%,
          100% {
            transform: translateY(0px) translateX(0px) scale(1);
            opacity: 0.4;
          }
          25% {
            transform: translateY(-15px) translateX(5px) scale(1.1);
            opacity: 0.8;
          }
          50% {
            transform: translateY(-25px) translateX(-3px) scale(0.9);
            opacity: 0.6;
          }
          75% {
            transform: translateY(-10px) translateX(8px) scale(1.2);
            opacity: 0.9;
          }
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default WhatIsCoachingPage;
