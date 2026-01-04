import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Players = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const players = [
    {
      id: 1,
      name: "Александр Иванов",
      club: "Спартак Москва",
      position: "Нападающий",
      number: 9,
      goals: 15,
      assists: 7,
      matches: 22,
      image: "https://cdn.poehali.dev/projects/6ab40912-5884-453b-9366-f58d066eb8d0/files/d5d2707e-4249-477a-8395-6823d3a9d016.jpg"
    },
    {
      id: 2,
      name: "Дмитрий Петров",
      club: "ЦСКА Москва",
      position: "Полузащитник",
      number: 10,
      goals: 8,
      assists: 12,
      matches: 24,
      image: "https://cdn.poehali.dev/projects/6ab40912-5884-453b-9366-f58d066eb8d0/files/d5d2707e-4249-477a-8395-6823d3a9d016.jpg"
    },
    {
      id: 3,
      name: "Сергей Смирнов",
      club: "Зенит",
      position: "Защитник",
      number: 4,
      goals: 2,
      assists: 3,
      matches: 23,
      image: "https://cdn.poehali.dev/projects/6ab40912-5884-453b-9366-f58d066eb8d0/files/d5d2707e-4249-477a-8395-6823d3a9d016.jpg"
    },
    {
      id: 4,
      name: "Максим Королёв",
      club: "Локомотив",
      position: "Вратарь",
      number: 1,
      goals: 0,
      assists: 0,
      matches: 25,
      image: "https://cdn.poehali.dev/projects/6ab40912-5884-453b-9366-f58d066eb8d0/files/d5d2707e-4249-477a-8395-6823d3a9d016.jpg"
    },
    {
      id: 5,
      name: "Антон Новиков",
      club: "Краснодар",
      position: "Нападающий",
      number: 11,
      goals: 13,
      assists: 5,
      matches: 21,
      image: "https://cdn.poehali.dev/projects/6ab40912-5884-453b-9366-f58d066eb8d0/files/d5d2707e-4249-477a-8395-6823d3a9d016.jpg"
    },
    {
      id: 6,
      name: "Игорь Васильев",
      club: "Динамо Москва",
      position: "Полузащитник",
      number: 8,
      goals: 6,
      assists: 9,
      matches: 23,
      image: "https://cdn.poehali.dev/projects/6ab40912-5884-453b-9366-f58d066eb8d0/files/d5d2707e-4249-477a-8395-6823d3a9d016.jpg"
    }
  ];

  const filteredPlayers = players.filter(player =>
    player.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    player.club.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getPositionColor = (position: string) => {
    switch (position) {
      case "Нападающий": return "bg-secondary";
      case "Полузащитник": return "bg-primary";
      case "Защитник": return "bg-blue-500";
      case "Вратарь": return "bg-purple-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/40 backdrop-blur-sm bg-background/95 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <a href="/" className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                WFC
              </a>
              <nav className="hidden md:flex gap-6">
                <a href="/" className="text-foreground/80 hover:text-primary transition-colors font-medium">
                  Новости
                </a>
                <a href="/players" className="text-primary transition-colors font-medium">
                  Игроки
                </a>
                <a href="/leagues" className="text-foreground/80 hover:text-primary transition-colors font-medium">
                  Лиги
                </a>
                <a href="#" className="text-foreground/80 hover:text-primary transition-colors font-medium">
                  Аналитика
                </a>
              </nav>
            </div>
            <Button variant="outline" className="md:hidden">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold mb-4 flex items-center gap-3">
            <Icon name="Users" size={40} className="text-primary" />
            Игроки
          </h1>
          <p className="text-muted-foreground text-lg">
            Каталог лучших футболистов российских клубов
          </p>
        </div>

        <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <div className="relative max-w-md">
            <Icon name="Search" size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Поиск по имени или клубу..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPlayers.map((player, index) => (
            <Card 
              key={player.id} 
              className="group cursor-pointer overflow-hidden hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={player.image} 
                    alt={player.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-primary text-primary-foreground font-bold text-2xl w-12 h-12 rounded-full flex items-center justify-center">
                      {player.number}
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge className={`${getPositionColor(player.position)} mb-2`}>
                      {player.position}
                    </Badge>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {player.name}
                  </h3>
                  <p className="text-muted-foreground mb-4 flex items-center gap-2">
                    <Icon name="Shield" size={16} />
                    {player.club}
                  </p>

                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">{player.goals}</div>
                      <div className="text-xs text-muted-foreground">Голов</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-secondary">{player.assists}</div>
                      <div className="text-xs text-muted-foreground">Передач</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-foreground">{player.matches}</div>
                      <div className="text-xs text-muted-foreground">Матчей</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredPlayers.length === 0 && (
          <div className="text-center py-16">
            <Icon name="Search" size={64} className="mx-auto text-muted-foreground mb-4" />
            <p className="text-xl text-muted-foreground">
              Игроки не найдены. Попробуйте изменить запрос
            </p>
          </div>
        )}

        <section className="mt-16 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Хотите видеть своего игрока в списке?</h3>
              <p className="text-muted-foreground mb-6">
                Напишите нам, и мы добавим информацию о футболисте в базу данных
              </p>
              <Button className="bg-primary hover:bg-primary/90">
                Предложить игрока
                <Icon name="Send" size={18} className="ml-2" />
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="border-t border-border/40 mt-16 bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-muted-foreground">
              © 2026 WFC. Все права защищены
            </div>
            <div className="flex gap-6">
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="X (Twitter)"
              >
                <Icon name="Twitter" size={24} />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Telegram"
              >
                <Icon name="Send" size={24} />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="YouTube"
              >
                <Icon name="Youtube" size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Players;
