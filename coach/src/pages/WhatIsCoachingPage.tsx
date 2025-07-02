import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowUp } from 'lucide-react';

const WhatIsCoachingPage: React.FC = () => {
  const navigate = useNavigate();

  const sections = [
    {
      title: 'コーチングとは',
      content: [
        'コーチングとは、自分の中にある"本音"を引き出す対話の技術です。',
        '',
        '本当は、気づいてるはずなんです。このままじゃ、何か違うって。',
        'でも、どう変えればいいのかは、自分でもわからない。',
        'その"もやもや"を、ちゃんと形にしていくのがコーチングです。'
      ]
    },
    {
      title: 'コンサルとの違い',
      content: [
        'コンサルは、やり方や答えを与えてくれます。',
        'でも、コーチングは問いかけます。',
        '',
        '「正解」より、「本音」。',
        '「こうすべき」より、「どうしたい？」',
        '',
        '主役は、いつだってあなた自身。',
        '他人の人生じゃなく、"自分の人生"を取り戻すプロセス。'
      ]
    },
    {
      title: 'コーチングを受けると、どうなる？',
      content: [
        '「ほんまは、こう生きたかったんや」って、自分の本音に気づけるようになる',
        '',
        '自己理解が深まり、なぜしんどかったのか、どう生きたいのかが、ハッキリしてくる',
        '',
        'ゴールが明確になり、行動が加速する',
        '',
        '成長が習慣化し、淡々と前に進める自分になってる'
      ]
    },
    {
      title: '最後に',
      content: [
        'このまま終わる？',
        'それとも、ここから始める？',
        '',
        '人生を変えるタイミングは、"今"'
      ]
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] text-white header-safe-padding relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#d4af37]/8 via-transparent to-[#b80000]/8"></div>
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#d4af37] rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `lightParticleFloat ${4 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-5xl mx-auto px-8 relative z-20 md:px-4">
        {/* Hero Section */}
        <section className="text-center py-12 sm:py-16 md:py-8">
          <h1 className="text-6xl font-bold text-[#d4af37] mb-4 font-serif md:text-4xl">
            What's Coaching?
          </h1>
          <p className="text-2xl text-gray-300 mb-12 font-serif md:text-xl md:mb-8">
            魅セルジブン×踊ルココロ 〜人生をデザインする〜
          </p>
        </section>

        {/* Content Sections */}
        <div className="space-y-16 md:space-y-8">
          {sections.map((section, index) => (
            <div key={index} className="p-8 md:p-6 bg-white/5 backdrop-blur-sm border border-[#d4af37]/20 rounded-2xl relative shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
              <h2 className="text-4xl font-bold text-[#d4af37] mb-6 font-serif md:text-2xl">
                {section.title}
              </h2>
              <div className="text-xl text-gray-200 leading-relaxed space-y-4 md:text-lg">
                {section.content.map((line, lineIndex) => (
                  <p key={lineIndex} className={line === '' ? 'h-2' : ''}>
                    {line}
                  </p>
                ))}
              </div>
              {index === sections.length - 1 && (
                <div className="mt-8">
                  <button
                    onClick={() => navigate('/contact')}
                    className="flex items-center gap-3 px-10 py-4 text-lg font-bold bg-gradient-to-r from-[#d4af37] to-[#ffd700] text-[#181818] border-none rounded-full cursor-pointer transition-all duration-300 hover:from-[#fffbe6] hover:to-[#ffd700] hover:text-[#d4af37] hover:transform hover:scale-[1.07] hover:-translate-y-0.5"
                  >
                    無料相談を申し込む
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ナビゲーションボタン */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center py-12 sm:py-16">
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

        <div className="h-20"></div>
      </div>

      <style jsx>{`
        @keyframes lightParticleFloat {
          0%, 100% {
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
      `}</style>
    </div>
  );
};

export default WhatIsCoachingPage;