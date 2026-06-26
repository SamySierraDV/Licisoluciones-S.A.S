import React from 'react';
import {
  Briefcase,
  Users,
  Sparkles,
  Scale,
  ShieldCheck,
  Building,
  HeartHandshake,
  Leaf,
  Globe,
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  Menu,
  X,
  Award,
  Star,
  ArrowRight,
  Loader2,
  LucideProps
} from 'lucide-react';

const iconsMap: Record<string, React.ComponentType<LucideProps>> = {
  Briefcase,
  Users,
  Sparkles,
  Scale,
  ShieldCheck,
  Building,
  HeartHandshake,
  Leaf,
  Globe,
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  Menu,
  X,
  Award,
  Star,
  ArrowRight,
  Loader2,
};

interface LucideIconProps {
  name: string;
  className?: string;
  key?: any;
  [key: string]: any;
}

export default function LucideIcon({ name, ...props }: LucideIconProps) {
  const IconComponent = iconsMap[name];
  if (!IconComponent) {
    // Fallback icon
    return <Scale {...props} />;
  }
  return <IconComponent {...props} />;
}
