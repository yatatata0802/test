import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Home, ArrowUp } from "lucide-react";
import SEO from "../components/SEO";
import { profileStoryContent } from "../constants/profileStory";
import AnimatedText from "../components/ui/AnimatedText";
import VisualGuide from "../components/ui/VisualGuide";
import { smartBreakJapanese } from "../smartBreakJapanese";

const ProfilePage: React.FC = () => {
  const navigate = useNavigate();

  const profileTitle = '人生を"作品"として生きる\n矢田谷充則という物語';

  const basicProfile = [
    "1983年生まれ／大阪府大阪市在住",
    "関西外国語大学 卒業",
    "元・大阪府警警察官（20年間勤務）",
    "GCS認定コーチ",
    "趣味：筋トレ/ゲーム/美容と健康オタク",
    "家族構成：妻・娘（小1）の3人暮らし",
  ];

  const highlightText = (text: string, highlights: string[]) => {
    let result = text;
    highlights.forEach((highlight) => {
      result = result.replace(
        highlight,
        `<span class="text-[#e53935] font-semibold">${highlight}</span>`
      );
    });
    return result;
  };

  // タイトルを意味のある単位で分割
  const titleParts = [
    { text: '人生を"作品"として生きる', breakAfter: true },
    { text: "矢田谷充則という物語", breakAfter: false },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // profileStoryContentをProfilePage.tsx内に直接定義
  const profileStoryContent = [
    {
      type: "paragraph",
      content: `"偽りの自分"を脱ぎ捨てて──\n\n人生を作品に変える、元公安コーチの物語`,
      className: "text-center text-xl sm:text-2xl font-semibold text-[#e53935]",
    },
    {
      type: "paragraph",
      content: `「このままで、本当にいいのか？」──そう問いかけながら、見えない"何か"に、じわじわと首を締められているような感覚。\n\n自分の人生なのに、誰かのレールを歩かされてるような感覚。\n\nもしあなたが、そんな"見えない鎖"に気づき始めているなら──この物語は、あなたのために書きました。`,
    },
    {
      type: "paragraph",
      content: `はじめまして。矢田谷充則（やたがいみつのり）です。私は、20年間公安警察官として働きながら、ずっと"偽りの自分"を演じ続けていました。\n\nでも今は違う。今は、"自分の人生を、自分でデザインする"という生き方を、全力で選び、全力で生きています。\n\nここでは、そんな私が"どうやって自分を取り戻してきたか"を、本音でお話しします。`,
    },
    {
      type: "heading",
      level: 3,
      content: '【1】"強くなれ"の呪縛：誰かの期待に応え続けた幼少期',
    },
    {
      type: "paragraph",
      content: `4歳で空手を始めたのは、自分の意志ではありませんでした。兄の影響、親の期待、"強くなれ"の言葉。\n\n勝てば褒められる。負ければ叱られる。"喜ばれるために頑張る"ことが、いつの間にか人生のベースになっていました。\n\n小5の全国大会。チームは優勝。でも俺だけ1勝もしていない。「これ、俺じゃなくてもよかったんちゃうか？」\n\nそのとき初めて、自分という存在の"薄さ"を感じたんです。「頑張ってるのに、心が満たされない」そんな違和感が、胸の奥にずっと残り続けました。`,
    },
    {
      type: "heading",
      level: 3,
      content: '【2】"やらされる人生"から、"選ぶ人生"へ',
    },
    {
      type: "paragraph",
      content: `中学卒業と同時に、空手を辞めた。それは、人生で初めて"自分の意思で選んだ別れ"でした。\n\nそこから一気に広がった自由。でも同時に、自分が空っぽであることにも気づかされました。\n\nそんなとき出会ったのが、ブレイクダンス。「これや！めちゃくちゃかっこええ！」自分の意思で、音に合わせて動く。誰の評価も関係ない。"生きてる感覚"が、一気に身体に流れ込んできました。\n\nロサンゼルスへの留学で見た、"自由を誇る人間たち"の姿。「表現していいんや、自分を出していいんや」と、深く刻まれた瞬間でした。`,
    },
    {
      type: "heading",
      level: 3,
      content: '【3】再びの仮面：公安警察という"静かな牢獄"',
    },
    {
      type: "paragraph",
      content: `大学を出て警察官になった私は、再び仮面をかぶり始めました。特に公安という世界は、"目立たないこと"「空気になること」が求められる組織。\n\n目立たないように、失敗しないように、波風立てないように。自分を押し殺すことが、プロとしての"正解"とされていた。\n\nでも俺の本質は、表現者。目立ちたがりで、自分を出したい人間。\n\n心のどこかで、ずっと叫び続けていたんです。「このまま人生終わらせてええんか？」「俺って、誰やねん？」\n\nその"叫び"は、年を追うごとに大きくなっていきました。`,
    },
    {
      type: "heading",
      level: 3,
      content: '【4】コーチングとの出会い：隠していた"本音"に火がついた',
    },
    {
      type: "paragraph",
      content: `ある日、コーチングセッションを受けました。たった一つの問いで、頭が真っ白になった。\n\n「で、あなたは本当はどうしたいんですか？」\n\n答えられなかった。自分の本音が、どこにあるのかすら分からなかった。\n\nその瞬間、すべての仮面が揺らぎました。──あぁ、俺、ずっと無理してたんや。\n\n本当は、もっと自分らしく、もっと自由に生きたかったんや。\n\nそう気づいた瞬間、20年間の"安定"が、鎖に見えた。`,
    },
    {
      type: "heading",
      level: 3,
      content: "【5】鬱という脱皮：止まったことで、始まった人生",
    },
    {
      type: "paragraph",
      content: `気づけば、心が悲鳴を上げていました。仕事中、動悸が止まらない。笑えない。眠れない。\n\n「でも、ようやく止まれる」──そう思った自分もいました。\n\nそれから私は、警察を辞める決意をします。退職金も、年金も、安定も、すべてを手放して。\n\nでも、心はずっと軽くなった。「やっと、自分の人生が始まる」と感じました。`,
    },
    {
      type: "heading",
      level: 3,
      content: '【6】人生を"作品"に変える──それが、俺のミッション',
    },
    {
      type: "paragraph",
      content: `鬱になったことも、過去の仮面も、全部"ネタ"にできる。それが、俺の"ブランディング思考"の原点。\n\n痛みを隠すんじゃない。語り直せば、それは誰かの希望になる。\n\n公安警察で培った"洞察力"「分析力」「限界突破力」全部、今では"誰かの人生を動かす武器"に変わった。\n\nだから、俺の使命は一つだけ。\n\n▶︎ あなたの人生を、"作品"にしよう。今までずっと、"誰かの期待"で生きてきたあなたへ。`,
      className: "font-bold",
    },
    {
      type: "paragraph",
      content: `もう、仮面はいらない。自分の人生を、自分の言葉で語り直していい。\n\nそれが、"本当のスタートライン"や。\n\n▶︎ 初回無料セッションはこちらから。あなたの物語の"本音"を、一緒に見つけに行こう。`,
      className: "font-bold",
    },
  ];

  return (
    <>
      <SEO
        title="PROFILE | 矢田谷充則の物語"
        description="公安警察官として20年間勤務した経験と、GCS認定コーチとしての専門知識を活かし、個人の目標達成と行動変容を支援する矢田谷充則の公式プロフィールページです。"
        keywords="矢田谷充則,プロフィール,GCS認定コーチ,元公安警察官,公安警察,筋トレ,ムエタイ,大阪,人生設計,継続力,目標達成,行動変容"
        type="person"
        author={{
          name: "矢田谷充則",
          jobTitle: "GCS認定コーチ, 元公安警察官",
          description:
            "公安警察官として20年間勤務した経験と、GCS認定コーチとしての専門知識を活かし、個人の目標達成と行動変容を支援する専門家。",
          knowsAbout: [
            "コーチング",
            "目標達成",
            "行動変容",
            "継続力",
            "公安警察",
            "警察官",
            "筋トレ",
            "ムエタイ",
            "人生設計",
          ],
          alumniOf: "関西外国語大学",
          gender: "male",
          sameAs: [
            "https://www.ginza-coach.com/coaches/view.cgi?username=2505FB4944",
          ],
        }}
      />
      <div className="min-h-screen bg-[#0a0a0a] text-white font-sans header-safe-padding pb-12 sm:pb-16 relative overflow-hidden">
        {/* ヒーローセクション - ヘッダー重なり修正 */}
        <section className="text-center py-8 sm:py-12 lg:py-16 px-4 sm:px-5 relative z-10 overflow-hidden">
          <div className="relative flex justify-center items-center mb-6 sm:mb-8 z-2 px-2">
            {/* タイトルアニメーション - 改行制御最適化 */}
            <div className="w-full max-w-4xl">
              {titleParts.map((part, partIndex) => (
                <div
                  key={partIndex}
                  className={`flex justify-center flex-wrap ${
                    part.breakAfter ? "mb-2 sm:mb-4" : ""
                  }`}
                >
                  {Array.from(part.text).map(
                    (char: string, charIndex: number) => (
                      <motion.span
                        key={`${partIndex}-${charIndex}`}
                        className="inline-block text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-[0.04em] sm:tracking-[0.06em] md:tracking-[0.08em] mx-[0.02em] sm:mx-[0.03em] md:mx-[0.04em]"
                        style={{
                          textShadow: "0 0 16px #e53935, 0 0 32px #fff",
                          filter: "drop-shadow(0 0 8px #e53935)",
                        }}
                        initial={{
                          y: 80,
                          opacity: 0,
                          scale: 0.7,
                          rotate: -30 + charIndex * 2,
                          filter: "blur(6px)",
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
                    )
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* プロフィール基本情報 - スマホ最適化 */}
          <div className="max-w-sm sm:max-w-md mx-auto mb-8 sm:mb-10 p-4 sm:p-6 bg-gradient-to-br from-[#d4af37]/20 to-[#ffd700]/20 border border-[#d4af37]/40 rounded-2xl text-left border-l-[5px] border-[#e53935] text-sm sm:text-base">
            {basicProfile.map((line, index) => (
              <React.Fragment key={index}>
                <span
                  dangerouslySetInnerHTML={{
                    __html: smartBreakJapanese(line, 25),
                  }}
                />
              </React.Fragment>
            ))}
          </div>

          {/* GCS認定コーチセクション */}
          <section className="max-w-4xl mx-auto px-4 sm:px-5 relative z-10 mb-10 sm:mb-12">
            <div className="p-6 sm:p-8 bg-gradient-to-br from-[#d4af37]/20 to-[#ffd700]/20 border border-[#d4af37]/40 rounded-2xl">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#d4af37]/20 border-2 border-[#d4af37] flex items-center justify-center mr-4">
                  <span className="text-[#d4af37] font-bold text-lg">G</span>
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#d4af37] mb-1">
                    GCS認定コーチ
                  </h2>
                  <p className="text-gray-300 text-sm">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: smartBreakJapanese(
                          "銀座コーチングスクール認定資格",
                          25
                        ),
                      }}
                    />
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-sm sm:text-base text-gray-300 leading-normal">
                <p>
                  <strong className="text-[#d4af37]">
                    銀座コーチングスクール
                  </strong>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: smartBreakJapanese(
                        "でコーチングの基礎から実践まで体系的に学び、認定コーチとしての資格を取得しました。",
                        25
                      ),
                    }}
                  />
                </p>
                <p>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: smartBreakJapanese(
                        "GCSは日本最大級のコーチングスクールとして知られ、厳格な認定基準をクリアしたコーチのみが認定コーチとして活動できます。",
                        25
                      ),
                    }}
                  />
                </p>
                <div className="mt-4 p-3 bg-white/10 rounded-lg border-l-4 border-[#d4af37]">
                  <p className="text-[#d4af37] font-semibold text-sm mb-1">
                    認定コーチとしての強み
                  </p>
                  <ul className="text-gray-300 text-sm space-y-1 leading-normal">
                    <li>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: smartBreakJapanese(
                            "• 体系的で実践的なコーチングスキル",
                            25
                          ),
                        }}
                      />
                    </li>
                    <li>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: smartBreakJapanese(
                            "• 継続的な学習とスキルアップ",
                            25
                          ),
                        }}
                      />
                    </li>
                    <li>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: smartBreakJapanese(
                            "• 厳格な認定基準をクリアした信頼性",
                            25
                          ),
                        }}
                      />
                    </li>
                    <li>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: smartBreakJapanese(
                            "• 日本最大級スクールのネットワーク",
                            25
                          ),
                        }}
                      />
                    </li>
                  </ul>
                </div>
                <div className="mt-4 text-center">
                  <a
                    href="https://www.ginza-coach.com/coaches/view.cgi?username=2505FB4944"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#d4af37] text-[#181818] font-bold rounded-lg hover:bg-[#ffd700] transition-all duration-300 text-sm"
                  >
                    認定コーチ詳細を見る
                    <span className="text-xs">↗</span>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* My Story セクション */}
          <section className="max-w-4xl mx-auto px-4 sm:px-5 relative z-10 jp-text-optimal text-balance">
            {/* タイトルのみ大きく表示 */}
            <p
              className="text-center text-2xl sm:text-3xl font-bold text-[#d4af37] mb-10"
              dangerouslySetInnerHTML={{
                __html: smartBreakJapanese(profileStoryContent[0].content, 25),
              }}
            />
            {/* headingごとにグループ化して四角で囲む */}
            {(() => {
              const blocks = [];
              let currentBlock = [];
              let blockIdx = 0;
              for (let i = 1; i < profileStoryContent.length; i++) {
                const item = profileStoryContent[i];
                if (item.type === "heading") {
                  if (currentBlock.length > 0) {
                    blocks.push([...currentBlock]);
                    currentBlock = [];
                  }
                }
                currentBlock.push(item);
              }
              if (currentBlock.length > 0) blocks.push(currentBlock);
              return blocks.map((block, idx) => (
                <VisualGuide type="glow-border" key={idx}>
                  <motion.div
                    className="mb-8 p-6 sm:p-6 bg-gradient-to-br from-[#d4af37]/10 via-[#181818]/60 to-[#ffd700]/10 border-2 border-[#d4af37]/40 rounded-2xl shadow-[0_8px_32px_rgba(212,175,55,0.10)] transition-all duration-500"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {block.map((item, i) => {
                      if (item.type === "heading") {
                        return (
                          <motion.h3
                            key={i}
                            className="text-xl sm:text-2xl font-bold text-[#d4af37] mt-2 mb-4 leading-normal"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: i * 0.05 }}
                            viewport={{ once: true }}
                          >
                            {smartBreakJapanese(item.content, 25)}
                          </motion.h3>
                        );
                      }
                      return (
                        <motion.p
                          key={i}
                          className={`${
                            item.className ? item.className : ""
                          } text-sm leading-normal`}
                          dangerouslySetInnerHTML={{
                            __html: smartBreakJapanese(item.content, 25),
                          }}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.7, delay: i * 0.05 }}
                          viewport={{ once: true }}
                        />
                      );
                    })}
                  </motion.div>
                </VisualGuide>
              ));
            })()}
          </section>

          {/* ページ下部固定CTA */}
          <div className="fixed bottom-0 left-0 w-full z-50 p-4 sm:p-6 bg-[#0a0a0a]/90 backdrop-blur-sm border-t border-[#d4af37]/30 flex justify-center items-center gap-4">
            <button
              onClick={() => navigate("/contact")}
              className="flex-1 sm:flex-none sm:w-auto px-4 py-3 sm:px-6 sm:py-3 bg-[#e53935] text-white font-bold rounded-xl shadow-lg hover:bg-[#ff6b6b] transition-all duration-300 text-base sm:text-lg text-center transform hover:scale-105"
            >
              無料セッションに申し込む
            </button>
            <button
              onClick={() => navigate("/#home")}
              className="flex-1 sm:flex-none sm:w-auto px-4 py-3 sm:px-6 sm:py-3 bg-gray-700 text-white font-bold rounded-xl shadow-lg hover:bg-gray-600 transition-all duration-300 text-base sm:text-lg text-center transform hover:scale-105"
            >
              トップページに戻る
            </button>
          </div>

          {/* Scroll to Top Button */}
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-28 right-5 sm:bottom-10 sm:right-10 bg-[#d4af37] text-[#181818] p-3 rounded-full shadow-lg z-50"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp size={24} />
          </motion.button>
        </section>
      </div>
    </>
  );
};

export default ProfilePage;
