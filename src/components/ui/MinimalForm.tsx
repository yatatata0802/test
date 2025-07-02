import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Mail } from 'lucide-react';

interface MinimalFormProps {
  onSubmit: (data: { name: string; email: string }) => void;
  isLoading?: boolean;
  className?: string;
}

const MinimalForm: React.FC<MinimalFormProps> = ({
  onSubmit,
  isLoading = false,
  className = ''
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`space-y-4 ${className}`}
    >
      {/* 名前入力 */}
      <div className="relative">
        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#d4af37] z-10" size={18} />
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="お名前"
          className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-[#d4af37] focus:outline-none focus:ring-2 focus:ring-[#d4af37]/20 transition-all mobile-touch-target"
        />
      </div>

      {/* メール入力 */}
      <div className="relative">
        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#d4af37] z-10" size={18} />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="メールアドレス"
          className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-[#d4af37] focus:outline-none focus:ring-2 focus:ring-[#d4af37]/20 transition-all mobile-touch-target"
        />
      </div>

      {/* 送信ボタン */}
      <motion.button
        type="submit"
        disabled={isLoading}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#e53935] via-[#d4af37] to-[#ffd700] text-white font-bold rounded-xl transition-all duration-300 mobile-touch-target relative overflow-hidden"
      >
        {isLoading ? (
          <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
        ) : (
          <>
            <Send size={20} />
            <span>無料で人生を変える第一歩を踏み出す</span>
          </>
        )}
      </motion.button>

      {/* 安心要素 */}
      <div className="text-center text-gray-400 text-xs space-y-1">
        <p>🔒 個人情報は厳重に保護されます</p>
        <p>📞 24時間以内にご連絡いたします</p>
      </div>
    </motion.form>
  );
};

export default MinimalForm;