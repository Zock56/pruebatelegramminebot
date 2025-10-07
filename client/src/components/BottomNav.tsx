import { Home, Store, Users, Wallet } from "lucide-react";
import { Link, useLocation } from "wouter";

export default function BottomNav() {
  const [location] = useLocation();

  const navItems = [
    { icon: Home, label: "Inicio", path: "/" },
    { icon: Store, label: "Tienda", path: "/store" },
    { icon: Users, label: "Referidos", path: "/referrals" },
    { icon: Wallet, label: "Wallet", path: "/wallet" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50">
      <div className="max-w-md mx-auto flex justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location === item.path;
          
          return (
            <Link
              key={item.path}
              href={item.path}
              className={`flex flex-col items-center py-3 px-4 min-w-0 flex-1 hover-elevate active-elevate-2 ${
                isActive ? "text-primary" : "text-muted-foreground"
              }`}
              data-testid={`link-${item.label.toLowerCase()}`}
            >
              <Icon className={`w-6 h-6 mb-1 ${isActive ? "animate-pulse" : ""}`} />
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
