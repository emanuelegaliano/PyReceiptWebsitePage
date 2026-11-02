import './style.css';
import {
  createIcons,
  Github,
  ArrowRight,
  Menu,
  CheckCircle2,
  Bot,
  Scan,
  Cpu,
  Calendar,
  Store,
  Tag,
  DollarSign,
  Sparkles,
  Mic,
  Send,
  ScanText,
  MessageSquareText,
  HelpCircle,
  PieChart,
  TrendingUp,
  ArrowUpRight,
  Check,
  Zap,
  Camera,
  FileText,
  ExternalLink,
  Terminal,
  ScanLine,
  Database,
  ShieldCheck,
  BookOpen,
  Clock,
  Smartphone,
  Download,
  WifiOff,
  History,
  Server
} from 'lucide';

// Initialize Lucide icons with tree-shaken icons
document.addEventListener('DOMContentLoaded', () => {
  createIcons({
    icons: {
      Github,
      ArrowRight,
      Menu,
      CheckCircle2,
      Bot,
      Scan,
      Cpu,
      Calendar,
      Store,
      Tag,
      DollarSign,
      Sparkles,
      Mic,
      Send,
      ScanText,
      MessageSquareText,
      HelpCircle,
      PieChart,
      TrendingUp,
      ArrowUpRight,
      Check,
      Zap,
      Camera,
      FileText,
      ExternalLink,
      Terminal,
      ScanLine,
      Database,
      ShieldCheck,
      BookOpen,
      Clock,
      Smartphone,
      Download,
      WifiOff,
      History,
      Server
    }
  });

  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
          if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
          }
        }
      }
    });
  });
});
