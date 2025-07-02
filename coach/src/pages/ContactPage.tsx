import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Send, Heart, Shield, Mail, MapPin, Clock, Home, ArrowUp } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const contactInfo = [
    { icon: Mail, text: 'coaching@yatagai.com' },
    { icon: MapPin, text: '大阪府大阪市（オンライン対応可）' },
    { icon: Clock, text: '平日 9:00-21:00 / 土日 10:00-18:00' }
  ];

  const assurances = [
    '無理な勧誘は一切いたしません',
    'ご相談内容・個人情報は秘密厳守',
    '初回体験セッションは完全無料',
    '24時間以内に必ずご返信'
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white header-safe-padding pb-12 sm:pb-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* ヒーローセクション - スマホ最適化 */}
        <div className="text-center mb-12 sm:mb-16 pt-8 sm:pt-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-[#d4af37]">
            CONTACT
          </h1>
          <div className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-2">
            あなたの"変わりたい"を<br />ここから。
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          {/* お問い合わせフォーム - スマホ最適化 */}
          <div className="p-6 sm:p-8 bg-white/5 backdrop-blur-sm border border-[#d4af37]/20 rounded-2xl hover:border-[#d4af37]/40">
            {isSubmitted ? (
              <motion.div 
                className="text-center py-8 sm:py-12"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-4xl sm:text-6xl mb-4 sm:mb-6">✨</div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#d4af37] mb-4">
                  ありがとうございます！
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  お問い合わせを受け付けました。<br />
                  24時間以内にご返信いたします。
                </p>
              </motion.div>
            ) : (
              <>
                <h2 className="text-xl sm:text-2xl font-bold text-[#d4af37] mb-6 flex items-center">
                  <Send className="mr-3" size={20} />
                  お問い合わせフォーム
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-[#d4af37] font-semibold mb-2 text-sm sm:text-base">
                      お名前 *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-3 sm:px-4 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-[#d4af37] focus:outline-none focus:ring-2 focus:ring-[#d4af37]/20 transition-all text-sm sm:text-base mobile-touch-target"
                      placeholder="山田太郎"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[#d4af37] font-semibold mb-2 text-sm sm:text-base">
                      メールアドレス *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-3 sm:px-4 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-[#d4af37] focus:outline-none focus:ring-2 focus:ring-[#d4af37]/20 transition-all text-sm sm:text-base mobile-touch-target"
                      placeholder="example@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-[#d4af37] font-semibold mb-2 text-sm sm:text-base">
                      お問い合わせ内容 *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-3 py-3 sm:px-4 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-[#d4af37] focus:outline-none focus:ring-2 focus:ring-[#d4af37]/20 transition-all resize-vertical text-sm sm:text-base"
                      placeholder="ご質問やご相談内容をお聞かせください..."
                    />
                  </div>
                  <button 
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 px-8 py-4 text-base sm:text-lg font-bold bg-gradient-to-r from-[#d4af37] to-[#ffd700] text-[#181818] border-none rounded-full cursor-pointer transition-all duration-300 hover:from-[#fffbe6] hover:to-[#ffd700] hover:text-[#d4af37] hover:transform hover:scale-[1.02] mobile-touch-target"
                  >
                    <Send size={18} />
                    送信する
                  </button>
                </form>
              </>
            )}
          </div>

          {/* コンタクト情報 - スマホ最適化 */}
          <div className="space-y-6 sm:space-y-8">
            <div className="p-6 sm:p-8 bg-white/5 backdrop-blur-sm border border-[#d4af37]/20 rounded-2xl hover:border-[#d4af37]/40">
              <h3 className="text-xl sm:text-2xl font-bold text-[#d4af37] mb-4 sm:mb-6">
                お気軽にご連絡ください
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-center text-gray-300 text-sm sm:text-base">
                      <IconComponent className="text-[#d4af37] mr-3 sm:mr-4 flex-shrink-0" size={16} />
                      <span>{info.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="p-6 sm:p-8 bg-gradient-to-br from-[#d4af37]/20 to-[#ffd700]/20 border border-[#d4af37]/40 rounded-2xl">
              <h3 className="text-lg sm:text-xl font-bold text-[#d4af37] mb-4 sm:mb-6 flex items-center">
                <Shield className="mr-3" size={18} />
                安心してご相談ください
              </h3>
              <div className="space-y-3 sm:space-y-4 text-gray-300">
                {assurances.map((assurance, index) => (
                  <div key={index} className="flex items-start">
                    <Heart className="text-[#d4af37] mr-3 mt-1 flex-shrink-0" size={12} />
                    <span className="text-sm sm:text-base">{assurance}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 sm:p-8 bg-white/5 backdrop-blur-sm border border-[#d4af37]/20 rounded-2xl text-center">
              <h3 className="text-lg sm:text-xl font-bold text-[#d4af37] mb-3 sm:mb-4">
                今すぐ行動を起こしませんか？
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                人生を変える最初の一歩は、<br />
                このフォームを送信することから始まります。
              </p>
              <div className="text-lg sm:text-xl lg:text-2xl font-bold text-[#d4af37]">
                あなたの物語は、まだ途中だ。
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-8 bg-gradient-to-br from-[#d4af37]/20 to-[#ffd700]/20 border border-[#d4af37]/40 rounded-2xl text-center mt-12 sm:mt-16">
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
            一人で悩まず、まずは話してみませんか？<br />
            あなたの"変わりたい"という気持ちを、全力でサポートします。
          </p>
        </div>

        {/* ナビゲーションボタン */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center py-8 sm:py-12">
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
    </div>
  );
};

export default ContactPage;