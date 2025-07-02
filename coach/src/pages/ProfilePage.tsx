import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Home, ArrowUp } from 'lucide-react';

const ProfilePage: React.FC = () => {
  const navigate = useNavigate();
  
  const profileTitle = '人生を"作品"として生きる\n矢田谷充則という物語';
  
  const basicProfile = [
    '1983年生まれ／大阪府大阪市在住',
    '関西外国語大学 卒業',
    '元・大阪府警警察官（20年間勤務）',
    '趣味：筋トレ/ゲーム/美容と健康オタク',
    '家族構成：妻・娘（小1）の3人暮らし'
  ];

  const storySections = [
    {
      title: '【1】はじまりの記憶：幼少期〜空手との出会い',
      content: [
        '僕の人生は、4歳のときに空手道場の門を叩いたところから始まった。兄の影響だったが、それは"自分で選んだ"というより、"やるのが当たり前"と思わされていた選択だった。',
        '幼い頃の僕は、"強さ"に憧れていた。強くなれば、自信が持てる。認められる。愛される。そんな気持ちをどこかで抱えていた。',
        'でも、空手を続ける中で次第に、"これって本当に自分のやりたいことなのか？"という違和感が心に芽生えていった。'
      ]
    },
    {
      title: '【2】解放と反発：空手をやめた先に見つけた"自分"',
      content: [
        '中学を卒業したとき、空手をやめた。道場に通わない自分は、まるで鎖を解かれたようだった。"やっと自由になれた"そう感じた。',
        'だがその自由は、次の迷いを連れてきた。誰かの期待から解放されたぶん、自分が何者なのか分からなくなった。学校にもなじめず、やや"はみ出し気味"な時期を過ごす。',
        'そんなとき、地元の駅前で踊っていた先輩たちの姿に、胸が高鳴った。"これや！かっこええ！"と直感した僕は、すぐに"教えてください"と声をかけた。',
        '空手とは違う。"やらされる"のではなく、"自分で選ぶ"表現。音に合わせて、自分の意思で動く。ブレイクダンスは、僕に"自分を生きる感覚"を教えてくれた。'
      ]
    },
    {
      title: '【3】社会人としての自分と転機：コーチングとの出会い',
      content: [
        '警察官として働きながら、僕は再び"規律"の中に戻った。でも、今度は逃げなかった。自分で選んだ道だったからだ。',
        '日々の業務、当直、部下の指導。決して楽な日々ではなかったが、その分、自分を律する力が磨かれていった。並行して筋トレをライフワークとし、ムエタイの大会にも出場。強くなるだけじゃない。"自分を超える"ということが、少しずつ分かってきた。',
        'そんな中で芽生えたのが、"もっと成長したい。もっと、自分を生きたい"という思い。その思いで出会ったのがコーチングだった。',
        '話すことで、こんなにも自分と向き合えるのか。"人が本気で変わろうとすれば、必ず成長できる"そう信じられるようになったとき、僕は"この力を人にも届けたい"と思った。'
      ]
    },
    {
      title: '【4】ミッション：人生をデザインする伴走者として',
      content: [
        '僕は、もう"空手をやらされた子供"じゃない。"誰かに指示されて生きる人間"でもない。',
        '自分の意志で、挑戦を選び続けている。筋トレも、格闘技も、コーチングも──全部、"自分で選んだ生き方"だ。',
        '今、僕がコーチとして目指しているのは、"人生を作品として生きる人"を増やすこと。',
        '誰かの期待に応えるためじゃない。自分自身の物語を、自分で書き続ける。そんな生き方を、一人でも多くの人に届けたい。',
        'あなたの人生も、きっと素晴らしい作品になる。僕と一緒に、その物語を紡いでいきませんか？'
      ]
    }
  ];

  const highlightText = (text: string, highlights: string[]) => {
    let result = text;
    highlights.forEach(highlight => {
      result = result.replace(highlight, `<span class="text-[#e53935] font-semibold">${highlight}</span>`);
    });
    return result;
  };

  // タイトルを意味のある単位で分割
  const titleParts = [
    { text: '人生を"作品"として生きる', breakAfter: true },
    { text: '矢田谷充則という物語', breakAfter: false }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans header-safe-padding pb-12 sm:pb-16 relative overflow-hidden">
      {/* ヒーローセクション - ヘッダー重なり修正 */}
      <section className="text-center py-8 sm:py-12 lg:py-16 px-4 sm:px-5 relative z-10 overflow-hidden">
        <div className="relative flex justify-center items-center mb-6 sm:mb-8 z-2 px-2">
          {/* タイトルアニメーション - 改行制御最適化 */}
          <div className="w-full max-w-4xl">
            {titleParts.map((part, partIndex) => (
              <div key={partIndex} className={`flex justify-center flex-wrap ${part.breakAfter ? 'mb-2 sm:mb-4' : ''}`}>
                {Array.from(part.text).map((char: string, charIndex: number) => (
                  <motion.span
                    key={`${partIndex}-${charIndex}`}
                    className="inline-block text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-[0.04em] sm:tracking-[0.06em] md:tracking-[0.08em] mx-[0.02em] sm:mx-[0.03em] md:mx-[0.04em]"
                    style={{
                      textShadow: '0 0 16px #e53935, 0 0 32px #fff',
                      filter: 'drop-shadow(0 0 8px #e53935)'
                    }}
                    initial={{
                      y: 80,
                      opacity: 0,
                      scale: 0.7,
                      rotate: -30 + charIndex * 2,
                      filter: "blur(8px)",
                    }}
                    whileInView={{
                      y: 0,
                      opacity: 1,
                      scale: 1.1,
                      rotate: 0,
                      filter: "blur(0px)",
                    }}
                    transition={{
                      delay: 0.12 + (partIndex * 20 + charIndex) * 0.04,
                      duration: 0.7,
                      type: "spring",
                      stiffness: 400,
                      damping: 18,
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* プロフィール基本情報 - スマホ最適化 */}
        <div className="max-w-sm sm:max-w-md mx-auto mb-8 sm:mb-10 p-4 sm:p-6 bg-gradient-to-br from-[#d4af37]/20 to-[#ffd700]/20 border border-[#d4af37]/40 rounded-2xl text-left border-l-[5px] border-[#e53935] text-sm sm:text-base">
          {basicProfile.map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index < basicProfile.length - 1 && <br />}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* ストーリーセクション - スマホ最適化 */}
      <section className="max-w-4xl mx-auto px-4 sm:px-5 relative z-10">
        {storySections.map((section, index) => (
          <div key={index} className="mb-10 sm:mb-12 lg:mb-15 p-6 sm:p-8 bg-white/5 backdrop-blur-sm border border-[#d4af37]/20 rounded-2xl transition-all duration-300 hover:border-[#d4af37]/40 hover:-translate-y-0.5">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-4 sm:mb-5 lg:mb-6 text-[#d4af37] border-l-4 border-[#d4af37] pl-3 sm:pl-4">
              {section.title}
            </h2>
            {index < 3 && (
              <img
                src={`https://images.pexels.com/photos/${
                  index === 0 ? '7045617' : 
                  index === 1 ? '416978' : 
                  '8112199'
                }/pexels-photo-${
                  index === 0 ? '7045617' : 
                  index === 1 ? '416978' : 
                  '8112199'
                }.jpeg`}
                alt={`${section.title}の写真`}
                className="block mx-auto mb-4 sm:mb-6 max-w-[160px] sm:max-w-[200px] lg:max-w-[220px] w-full h-auto aspect-[4/5] object-cover rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.18)]"
              />
            )}
            <div className="text-sm sm:text-base lg:text-lg leading-6 sm:leading-7 text-[#e0e0e0] text-justify jp-text-optimal">
              {section.content.map((paragraph, pIndex) => (
                <p 
                  key={pIndex} 
                  className={pIndex > 0 ? 'mt-3 sm:mt-4' : ''}
                  dangerouslySetInnerHTML={{
                    __html: highlightText(paragraph, [
                      '"強さ"',
                      '"自分を生きる感覚"',
                      '"自分を超える"',
                      '"人生を作品として生きる人"'
                    ])
                  }}
                />
              ))}
            </div>
          </div>
        ))}
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

export default ProfilePage;