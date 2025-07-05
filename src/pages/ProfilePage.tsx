import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Home, ArrowUp } from "lucide-react";
import SEO from "../components/SEO";
import { profileStoryContent } from "../constants/profileStory";
import AnimatedText from "../components/ui/AnimatedText";
import VisualGuide from "../components/ui/VisualGuide";

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
                {line}
                {index < basicProfile.length - 1 && <br />}
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
                    銀座コーチングスクール認定資格
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-sm sm:text-base text-gray-300">
                <p>
                  <strong className="text-[#d4af37]">
                    銀座コーチングスクール
                  </strong>
                  でコーチングの基礎から実践まで体系的に学び、
                  認定コーチとしての資格を取得しました。
                </p>
                <p>
                  GCSは日本最大級のコーチングスクールとして知られ、厳格な認定基準をクリアしたコーチのみが
                  認定コーチとして活動できます。
                </p>
                <div className="mt-4 p-3 bg-white/10 rounded-lg border-l-4 border-[#d4af37]">
                  <p className="text-[#d4af37] font-semibold text-sm mb-1">
                    認定コーチとしての強み
                  </p>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• 体系的で実践的なコーチングスキル</li>
                    <li>• 継続的な学習とスキルアップ</li>
                    <li>• 厳格な認定基準をクリアした信頼性</li>
                    <li>• 日本最大級スクールのネットワーク</li>
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
          <section className="max-w-4xl mx-auto px-4 sm:px-5 relative z-10">
            {/* タイトルのみ大きく表示 */}
            <p
              className="text-center text-2xl sm:text-3xl font-bold text-[#d4af37] mb-10"
              dangerouslySetInnerHTML={{
                __html: profileStoryContent[0].content,
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
                            className="text-xl sm:text-2xl font-bold text-[#d4af37] mt-2 mb-4"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: i * 0.05 }}
                            viewport={{ once: true }}
                          >
                            {item.content}
                          </motion.h3>
                        );
                      }
                      return (
                        <motion.p
                          key={i}
                          className={item.className ? item.className : ""}
                          dangerouslySetInnerHTML={{ __html: item.content }}
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
