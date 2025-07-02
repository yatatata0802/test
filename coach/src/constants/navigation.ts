import { Home, User, HelpCircle, Settings, Mail } from 'lucide-react';
import type { NavItem } from '../types';

export const NAV_ITEMS: NavItem[] = [
  { path: '/main', label: 'HOME', icon: Home },
  { path: '/profile', label: 'PROFILE', icon: User },
  { path: '/what-coaching', label: "WHAT'S COACHING", icon: HelpCircle },
  { path: '/services', label: 'SERVICES', icon: Settings },
  { path: '/contact', label: 'CONTACT', icon: Mail },
];