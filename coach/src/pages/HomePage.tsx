import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { User, HelpCircle, Settings, Mail, ArrowRight, Target, Eye } from 'lucide-react';
import SectionDivider from '../components/SectionDivider';
import VisualGuide from '../components/ui/VisualGuide';
import MobileOptimizedButton from '../components/ui/MobileOptimizedButton';
import OptimizedCTA from '../components/ui/OptimizedCTA';

gsap.registerPlugin(ScrollTrigger);

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const heroRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // ヒーローセクションシネマティック登場
    const tl = gsap.timeline();
    
    tl.fromTo(heroRef.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
    );

    // セクションのスクロール連動アニメーション
    sectionsRef.current.forEach((section, index) => {
      if (section) {
        gsap.fromTo(section,
          { 
            opacity: 0, 
            y: 100,
            scale: 0.95
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  const supportTargets = [
    {
      text: '「このままじゃダメだ」と悩み、動き出せない方',
      description: '頭では分かってるのに、なぜか行動できない状態から脱出'
    },
    {
      text: '「もっと強くなりたい」と、新しい挑戦をしたい方',
      description: '現状に満足せず、さらなる高みを目指したい向上心ある方'
    },
    {
      text: 'モチベーションが続かず、三日坊主で終わってしまう方',
      description: 'やる気はあるのに継続できない悩みを根本から解決'
    },
    {
      text: '目標達成のために自己管理能力を磨きたい方',
      description: '時間・感情・習慣を統合的に管理する力を身につける'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white relative overflow-hidden">
      {/* アンビエント背景効果 */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-[#d4af37]/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-red-500/5 rounded-full blur-3xl animate-pulse animation-delay-1000" />
      </div>

      {/* ヒーローセクション - ヘッダー高さを考慮 */}
      <section ref={heroRef} className="relative min-h-screen flex flex-col justify-center items-center px-4 header-safe-padding sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center max-w-4xl"
        >
          {/* 注目を集める要素 */}
          <VisualGuide type="attention-grabber" delay={2} className="mb-4">
            <div className="inline-block px-4 py-2 bg-[#e53935]/20 border border-[#e53935]/50 rounded-full text-[#e53935] text-sm font-bold animate-pulse">
              🔥 今すぐ変わりたいあなたへ
            </div>
          </VisualGuide>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 sm:mb-6 bg-gradient-to-r from-white via-[#d4af37] to-white bg-clip-text text-transparent">
            矢田谷 充則
            <span className="block text-xl sm:text-2xl md:text-3xl text-[#d4af37] font-medium mt-2">
              (Yatagai Mitsunori)
            </span>
          </h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-lg sm:text-xl md:text-2xl text-[#d4af37] font-semibold mb-6 sm:mb-8"
          >
            魅セルジブン × 踊ルココロ
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="text-base sm:text-lg md:text-xl leading-relaxed space-y-3 sm:space-y-4 px-2 mb-8"
          >
            <p>"このままの自分でいいのか？"と問い続けているあなたへ</p>
            <VisualGuide type="glow-border" delay={2.5}>
              <p className="text-xl sm:text-2xl font-bold text-[#d4af37]">
                "なりたい自分"を夢で終わらせない。
              </p>
            </VisualGuide>
            <p>今の自分にモヤモヤしてるなら──</p>
            <p>心と身体の両面から、"なりたい自分"に火をつける。</p>
          </motion.div>

          {/* 最適化されたCTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 1 }}
          >
            <OptimizedCTA
              onClick={() => navigate('/contact')}
              variant="urgent"
              size="xl"
              urgency="⏰ 今月限定3名様"
              socialProof="満足度98% - 200名以上の実績"
            >
              無料で人生を変える第一歩を踏み出す
            </OptimizedCTA>
          </motion.div>
        </motion.div>

        {/* スクロール誘導 */}
        <VisualGuide type="arrow-down" delay={3} className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          続きを見る
        </VisualGuide>
      </section>

      <SectionDivider variant="wave" />

      {/* My Storyセクション - 視線誘導最適化 */}
      <section ref={addToRefs} className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="relative p-6 sm:p-8 lg:p-12 bg-gradient-to-br from-[#d4af37]/20 via-[#ffd700]/10 to-[#d4af37]/20 border border-[#d4af37]/40 rounded-2xl sm:rounded-3xl backdrop-blur-sm"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* グロー効果 */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37]/20 to-[#ffd700]/20 rounded-2xl sm:rounded-3xl blur-xl opacity-50" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6 sm:mb-8">
                <VisualGuide type="pulse-dot" className="mr-4" />
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#d4af37] text-center">
                  My Story
                </h2>
                <VisualGuide type="pulse-dot" className="ml-4" />
              </div>
              
              <div className="space-y-4 sm:space-y-6 text-base sm:text-lg leading-relaxed">
                <p>
                  大阪府生まれ。無理やりやらされていた空手を辞め「自由」を手にした反動で、少しヤンチャな時期も。転機はブレイクダンスとの出会い。「自分で選んでやる楽しさ」を知り、自己表現に目覚めました。
                </p>
                <VisualGuide type="glow-border" delay={0.5}>
                  <p className="bg-[#d4af37]/10 p-4 rounded-lg border-l-4 border-[#d4af37]">
                    社会人になり筋トレやムエタイに打ち込む中で「もっと成長したい」という想いが募り、コーチングと出会います。「人が本気で変わろうとすれば必ず成長できる」という考えに深く共感し、自身の経験を活かして挑戦する人をサポートするため、コーチの道を歩み始めました。
                  </p>
                </VisualGuide>
                <p>
                  見た目・行動・雰囲気──すべてを通じて理想を体現する。あなたの人生そのものを"作品"としてデザインするお手伝いをします。
                </p>
              </div>
              
              <div className="flex justify-center mt-8 sm:mt-10">
                <VisualGuide type="arrow-right" delay={1}>
                  <MobileOptimizedButton 
                    onClick={() => navigate('/profile')} 
                    icon={User}
                    variant="primary"
                    size="lg"
                  >
                    〜 PROFILE 〜
                  </MobileOptimizedButton>
                </VisualGuide>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <SectionDivider variant="diagonal" />

      {/* サポートセクション - シンプル表示 */}
      <section ref={addToRefs} className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="p-6 sm:p-8 lg:p-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl sm:rounded-3xl hover:border-[#d4af37]/30 transition-all duration-500"
            whileHover={{ y: -10 }}
          >
            <div className="flex items-center mb-6 sm:mb-8">
              <Target className="text-[#d4af37] mr-4" size={24} />
              <h2 className="text-2xl sm:text-3xl font-bold text-[#d4af37] border-l-4 border-[#d4af37] pl-4 sm:pl-6">
                こんな方をサポートします
              </h2>
            </div>
            
            <div className="grid gap-4 sm:gap-6">
              {supportTargets.map((target, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 sm:p-6 rounded-lg bg-gradient-to-r from-[#d4af37]/10 to-transparent border-l-4 border-[#d4af37] hover:from-[#d4af37]/20 transition-all duration-300"
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <VisualGuide type="pulse-dot" delay={index * 0.2} />
                    <div className="flex-1">
                      <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
                        {target.text}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-400">
                        {target.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="flex justify-center mt-8 sm:mt-10">
              <VisualGuide type="attention-grabber" delay={1}>
                <MobileOptimizedButton 
                  onClick={() => navigate('/what-coaching')} 
                  icon={HelpCircle}
                  variant="secondary"
                  size="lg"
                >
                  〜 WHAT'S COACHING 〜
                </MobileOptimizedButton>
              </VisualGuide>
            </div>
          </motion.div>
        </div>
      </section>

      <SectionDivider variant="curve" />

      {/* サービスセクション - 視線誘導最適化 */}
      <section ref={addToRefs} className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="p-6 sm:p-8 lg:p-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl sm:rounded-3xl hover:border-[#d4af37]/30 transition-all duration-500"
            whileHover={{ y: -10 }}
          >
            <div className="flex items-center mb-6 sm:mb-8">
              <Settings className="text-[#d4af37] mr-4" size={24} />
              <h2 className="text-2xl sm:text-3xl font-bold text-[#d4af37] border-l-4 border-[#d4af37] pl-4 sm:pl-6">
                サポート内容
              </h2>
            </div>
            
            <VisualGuide type="glow-border" delay={0.5}>
              <div className="text-[#d4af37] font-semibold mb-4 sm:mb-6 text-lg sm:text-xl bg-[#d4af37]/10 p-4 rounded-lg text-center">
                得意なサポート
              </div>
            </VisualGuide>
            
            <div className="space-y-4 sm:space-y-6">
              {[
                {
                  title: "行動変容支援：",
                  description: "「変わりたい」を行動に繋げ、一歩踏み出す勇気を引き出します。",
                  color: "#e53935"
                },
                {
                  title: "自己管理強化：",
                  description: "目標達成に不可欠な「継続する力」を育てます。",
                  color: "#d4af37"
                },
                {
                  title: "心と身体のサポート：",
                  description: "フィジーク経験を活かし、統合的なセルフマネジメントを支援します。",
                  color: "#ffd700"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative"
                >
                  <VisualGuide type="glow-border" delay={index * 0.2}>
                    <div className="p-4 sm:p-6 bg-gradient-to-r from-[#d4af37]/10 to-transparent rounded-xl border-l-4 border-[#d4af37] hover:from-[#d4af37]/20 transition-all duration-300">
                      <div className="flex items-center">
                        <Eye className="text-[#d4af37] mr-3 opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
                        <span className="text-[#d4af37] font-bold text-base sm:text-lg">{item.title}</span>
                      </div>
                      <span className="text-white ml-2 text-base sm:text-lg block mt-2">{item.description}</span>
                    </div>
                  </VisualGuide>
                </motion.div>
              ))}
            </div>
            
            <div className="flex justify-center mt-8 sm:mt-10">
              <VisualGuide type="arrow-right" delay={1}>
                <MobileOptimizedButton 
                  onClick={() => navigate('/services')} 
                  icon={Settings}
                  variant="primary"
                  size="lg"
                >
                  〜 SERVICES 〜
                </MobileOptimizedButton>
              </VisualGuide>
            </div>
          </motion.div>
        </div>
      </section>

      <SectionDivider variant="wave" flip />

      {/* 統合されたメインCTAセクション - 強力な訴求力 */}
      <section ref={addToRefs} className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="p-8 sm:p-12 lg:p-16 bg-gradient-to-br from-[#e53935]/20 via-[#d4af37]/20 to-[#ffd700]/20 border border-[#e53935]/40 rounded-2xl sm:rounded-3xl text-center backdrop-blur-sm relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
          >
            {/* 背景アニメーション */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#e53935]/20 to-[#ffd700]/20 rounded-2xl sm:rounded-3xl blur-xl opacity-50" />
            
            {/* 注目を集める要素 */}
            <VisualGuide type="attention-grabber" className="absolute top-4 right-4">
              <div className="w-8 h-8 bg-[#e53935] rounded-full flex items-center justify-center animate-bounce">
                <span className="text-white text-xs font-bold">!</span>
              </div>
            </VisualGuide>
            
            <div className="relative z-10">
              {/* 緊急性を演出 */}
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#e53935]/20 border border-[#e53935]/50 rounded-full text-[#e53935] text-sm font-bold mb-6 animate-pulse"
              >
                ⏰ 今月限定3名様 - 初回セッション無料（通常10,000円）
              </motion.div>
              
              <VisualGuide type="pulse-dot" className="mx-auto mb-4" />
              
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#d4af37] mb-6 sm:mb-8">
                さあ、はじめの一歩を。
              </h3>
              
              <VisualGuide type="glow-border" delay={0.5}>
                <div className="bg-black/30 p-6 sm:p-8 rounded-lg mb-8 sm:mb-10">
                  <p className="text-lg sm:text-xl lg:text-2xl mb-4 leading-relaxed">
                    ご質問や初回セッションのお申し込みはこちらから。
                  </p>
                  <p className="text-base sm:text-lg text-gray-300">
                    200名以上の人生を変えてきた実績。<br />
                    満足度98%のコーチングを、まずは無料で体験してください。
                  </p>
                </div>
              </VisualGuide>
              
              {/* 社会的証明 */}
              <div className="grid grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-[#d4af37]">200+</div>
                  <div className="text-xs sm:text-sm text-gray-400">実績</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-[#d4af37]">98%</div>
                  <div className="text-xs sm:text-sm text-gray-400">満足度</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-[#d4af37]">90%</div>
                  <div className="text-xs sm:text-sm text-gray-400">目標達成率</div>
                </div>
              </div>
              
              <VisualGuide type="attention-grabber" delay={1}>
                <OptimizedCTA
                  onClick={() => navigate('/contact')}
                  variant="social-proof"
                  size="xl"
                  urgency="今なら初回セッション無料"
                  socialProof="98%の方が満足 - 200名以上の実績"
                  fullWidth={true}
                  className="max-w-md mx-auto"
                >
                  お問い合わせ・お申し込み
                </OptimizedCTA>
              </VisualGuide>

              {/* 安心要素 */}
              <div className="mt-6 sm:mt-8 text-sm text-gray-400 space-y-1">
                <p>🔒 無理な勧誘は一切ありません</p>
                <p>📞 24時間以内にご連絡いたします</p>
                <p>✨ 完全秘密厳守でご相談いただけます</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* トップへ戻る - 親指操作エリア最適化 */}
      <div className="text-center py-8 sm:py-12">
        <MobileOptimizedButton
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          variant="outline"
          size="md"
        >
          トップへ戻る
        </MobileOptimizedButton>
      </div>
    </div>
  );
};

export default HomePage;