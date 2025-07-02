import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Facebook, Youtube, MessageCircle } from 'lucide-react';

interface SocialLinksProps {
  variant?: 'horizontal' | 'vertical' | 'grid';
  size?: 'sm' | 'md' | 'lg';
  showLabels?: boolean;
  className?: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({
  variant = 'horizontal',
  size = 'md',
  showLabels = false,
  className = ''
}) => {
  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/yatagai_coaching',
      color: '#E4405F',
      description: '日々の気づきや筋トレ風景をシェア'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com/yatagai_coaching',
      color: '#1DA1F2',
      description: 'コーチングのヒントや考察を発信'
    },
    {
      name: 'YouTube',
      icon: Youtube,
      url: 'https://youtube.com/@yatagai_coaching',
      color: '#FF0000',
      description: 'セルフマネジメント動画を配信'
    },
    {
      name: 'LINE',
      icon: MessageCircle,
      url: 'https://line.me/ti/p/@yatagai_coaching',
      color: '#00B900',
      description: '気軽にメッセージをお送りください'
    }
  ];

  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };

  const iconSizes = {
    sm: 16,
    md: 20,
    lg: 24
  };

  const containerClasses = {
    horizontal: 'flex items-center gap-4',
    vertical: 'flex flex-col gap-4',
    grid: 'grid grid-cols-2 gap-4'
  };

  return (
    <div className={`${containerClasses[variant]} ${className}`}>
      {socialLinks.map((social, index) => {
        const IconComponent = social.icon;
        
        return (
          <motion.a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className={`
              ${sizeClasses[size]} 
              flex items-center justify-center 
              bg-white/10 backdrop-blur-sm 
              border border-white/20 
              rounded-full 
              transition-all duration-300 
              hover:border-[#d4af37] 
              hover:shadow-[0_8px_32px_rgba(212,175,55,0.3)]
              group
              ${showLabels ? 'gap-3 px-4 py-2 w-auto' : ''}
            `}
            style={{
              '--hover-color': social.color
            } as React.CSSProperties}
          >
            <IconComponent 
              size={iconSizes[size]} 
              className="text-white group-hover:text-[#d4af37] transition-colors duration-300" 
            />
            {showLabels && (
              <div className="flex flex-col">
                <span className="text-white text-sm font-medium group-hover:text-[#d4af37] transition-colors">
                  {social.name}
                </span>
                {variant === 'grid' && (
                  <span className="text-gray-400 text-xs">
                    {social.description}
                  </span>
                )}
              </div>
            )}
          </motion.a>
        );
      })}
    </div>
  );
};

export default SocialLinks;