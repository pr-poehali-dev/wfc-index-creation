import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const topNews = [
    {
      id: 1,
      title: "Сборная России разгромила соперника со счётом 4:1",
      date: "03.01.2026",
      image: "https://cdn.poehali.dev/projects/6ab40912-5884-453b-9366-f58d066eb8d0/files/d5d2707e-4249-477a-8395-6823d3a9d016.jpg"
    },
    {
      id: 2,
      title: "Новый рекорд: 15 голов за сезон",
      date: "02.01.2026",
      image: "https://cdn.poehali.dev/projects/6ab40912-5884-453b-9366-f58d066eb8d0/files/d5d2707e-4249-477a-8395-6823d3a9d016.jpg"
    },
    {
      id: 3,
      title: "Трансферное окно: главные сделки недели",
      date: "01.01.2026",
      image: "https://cdn.poehali.dev/projects/6ab40912-5884-453b-9366-f58d066eb8d0/files/d5d2707e-4249-477a-8395-6823d3a9d016.jpg"
    },
    {
      id: 4,
      title: "Интервью с капитаном команды",
      date: "31.12.2025",
      image: "https://cdn.poehali.dev/projects/6ab40912-5884-453b-9366-f58d066eb8d0/files/d5d2707e-4249-477a-8395-6823d3a9d016.jpg"
    },
    {
      id: 5,
      title: "Анонс матчей на выходные",
      date: "30.12.2025",
      image: "https://cdn.poehali.dev/projects/6ab40912-5884-453b-9366-f58d066eb8d0/files/d5d2707e-4249-477a-8395-6823d3a9d016.jpg"
    }
  ];

  const todayMatches = [
    { team1: "Спартак", team2: "ЦСКА", time: "19:00" },
    { team1: "Зенит", team2: "Локомотив", time: "21:30" },
    { team1: "Краснодар", team2: "Динамо", time: "23:00" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/40 backdrop-blur-sm bg-background/95 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                WFC
              </h1>
              <nav className="hidden md:flex gap-6">
                <a href="#" className="text-foreground/80 hover:text-primary transition-colors font-medium">
                  Новости
                </a>
                <a href="#" className="text-foreground/80 hover:text-primary transition-colors font-medium">
                  Игроки
                </a>
                <a href="#" className="text-foreground/80 hover:text-primary transition-colors font-medium">
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
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section className="relative overflow-hidden rounded-2xl animate-fade-in">
              <div className="relative h-[500px]">
                <img 
                  src="https://cdn.poehali.dev/projects/6ab40912-5884-453b-9366-f58d066eb8d0/files/d5d2707e-4249-477a-8395-6823d3a9d016.jpg" 
                  alt="Main news" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <Badge className="mb-4 bg-secondary text-secondary-foreground">
                    Новость дня
                  </Badge>
                  <h2 className="text-4xl font-bold mb-4 text-white drop-shadow-lg">
                    Историческая победа: команда установила новый рекорд лиги
                  </h2>
                  <p className="text-white/90 mb-6 text-lg max-w-2xl">
                    В напряжённом матче наша команда показала невероятную игру, 
                    забив решающий гол на последней минуте
                  </p>
                  <Button className="bg-primary hover:bg-primary/90">
                    Читать полностью
                    <Icon name="ArrowRight" size={20} className="ml-2" />
                  </Button>
                </div>
              </div>
            </section>

            <section className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Icon name="TrendingUp" size={28} className="text-primary" />
                Топ-5 новостей
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {topNews.map((news, index) => (
                  <Card 
                    key={news.id} 
                    className="group cursor-pointer overflow-hidden hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1"
                    style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                  >
                    <CardContent className="p-0">
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={news.image} 
                          alt={news.title} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
                      </div>
                      <div className="p-4">
                        <p className="text-sm text-muted-foreground mb-2 flex items-center gap-2">
                          <Icon name="Calendar" size={14} />
                          {news.date}
                        </p>
                        <h4 className="font-semibold text-lg group-hover:text-primary transition-colors">
                          {news.title}
                        </h4>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          <aside className="space-y-6 animate-slide-in">
            <Card className="bg-card border-primary/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Icon name="Clock" size={24} className="text-secondary" />
                  Сегодняшние матчи
                </h3>
                <div className="space-y-4">
                  {todayMatches.map((match, index) => (
                    <div 
                      key={index} 
                      className="p-4 rounded-lg bg-background/50 hover:bg-background/80 transition-colors cursor-pointer border border-border/50"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold">{match.team1}</span>
                        <Badge variant="outline" className="text-xs">
                          {match.time}
                        </Badge>
                      </div>
                      <div className="text-center text-muted-foreground text-sm my-2">VS</div>
                      <div className="font-semibold text-right">{match.team2}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
              <CardContent className="p-6">
                <h4 className="font-bold mb-4 text-lg">Быстрая подписка</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Получайте свежие новости и результаты матчей
                </p>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Подписаться
                  <Icon name="Bell" size={18} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          </aside>
        </div>
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

export default Index;
