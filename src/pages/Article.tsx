import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Separator } from "@/components/ui/separator";

const Article = () => {
  const relatedNews = [
    {
      id: 1,
      title: "Топ-10 молодых талантов сезона",
      date: "02.01.2026",
      image: "https://cdn.poehali.dev/projects/6ab40912-5884-453b-9366-f58d066eb8d0/files/d5d2707e-4249-477a-8395-6823d3a9d016.jpg"
    },
    {
      id: 2,
      title: "Анализ тактики лучших команд",
      date: "01.01.2026",
      image: "https://cdn.poehali.dev/projects/6ab40912-5884-453b-9366-f58d066eb8d0/files/d5d2707e-4249-477a-8395-6823d3a9d016.jpg"
    },
    {
      id: 3,
      title: "Предстоящие трансферы зимы 2026",
      date: "31.12.2025",
      image: "https://cdn.poehali.dev/projects/6ab40912-5884-453b-9366-f58d066eb8d0/files/d5d2707e-4249-477a-8395-6823d3a9d016.jpg"
    }
  ];

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
                <a href="/players" className="text-foreground/80 hover:text-primary transition-colors font-medium">
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

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <article className="animate-fade-in">
          <div className="mb-6">
            <Button variant="ghost" asChild className="mb-4">
              <a href="/" className="flex items-center gap-2">
                <Icon name="ArrowLeft" size={20} />
                Назад к новостям
              </a>
            </Button>
            
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className="bg-secondary">Матчи</Badge>
              <Badge variant="outline">Сборная России</Badge>
              <Badge variant="outline">Чемпионат</Badge>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Историческая победа: команда установила новый рекорд лиги
          </h1>

          <div className="flex items-center gap-6 text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <Icon name="Calendar" size={18} />
              <span>03 января 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="User" size={18} />
              <span>Александр Петров</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Clock" size={18} />
              <span>5 мин чтения</span>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden mb-8">
            <img 
              src="https://cdn.poehali.dev/projects/6ab40912-5884-453b-9366-f58d066eb8d0/files/d5d2707e-4249-477a-8395-6823d3a9d016.jpg" 
              alt="Main article" 
              className="w-full h-[500px] object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-foreground/90 mb-6 leading-relaxed">
              В напряжённом матче, который держал болельщиков в напряжении до самого финального свистка,
              наша команда продемонстрировала невероятную игру и установила новый рекорд лиги.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Ключевые моменты матча</h2>
            <p className="text-foreground/80 mb-4 leading-relaxed">
              Первый тайм начался с активной атаки соперника, однако наша оборона работала безупречно.
              На 23-й минуте капитан команды открыл счёт после блестящего паса от полузащитника.
              Этот гол стал началом триумфального шествия нашей команды.
            </p>

            <Card className="my-8 bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Icon name="Quote" size={32} className="text-primary flex-shrink-0" />
                  <div>
                    <p className="text-lg italic mb-2">
                      "Это была невероятная командная работа. Каждый игрок выложился на все сто процентов.
                      Мы заслужили эту победу."
                    </p>
                    <p className="text-sm text-muted-foreground">
                      — Главный тренер команды
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="text-2xl font-bold mt-8 mb-4">Статистика матча</h2>
            <div className="grid md:grid-cols-3 gap-4 my-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">67%</div>
                  <p className="text-sm text-muted-foreground">Владение мячом</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-secondary mb-2">18</div>
                  <p className="text-sm text-muted-foreground">Удары по воротам</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">92%</div>
                  <p className="text-sm text-muted-foreground">Точность передач</p>
                </CardContent>
              </Card>
            </div>

            <p className="text-foreground/80 mb-4 leading-relaxed">
              Во втором тайме команда продолжила доминировать. На 58-й минуте был забит второй гол,
              а затем ещё два в течение последних 15 минут матча. Финальный счёт 4:1 стал лучшим
              результатом команды за последние пять сезонов.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Что дальше?</h2>
            <p className="text-foreground/80 mb-4 leading-relaxed">
              Следующий матч состоится уже в эти выходные. Команда продолжит борьбу за лидерство
              в турнирной таблице. После такой убедительной победы моральный дух игроков на высоте,
              и они готовы к новым свершениям.
            </p>
          </div>

          <Separator className="my-8" />

          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Icon name="Share2" size={18} className="mr-2" />
                Поделиться
              </Button>
              <Button variant="outline" size="sm">
                <Icon name="Bookmark" size={18} className="mr-2" />
                Сохранить
              </Button>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Icon name="Eye" size={18} />
              <span>2,347 просмотров</span>
            </div>
          </div>
        </article>

        <section className="mt-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h3 className="text-2xl font-bold mb-6">Похожие новости</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedNews.map((news) => (
              <Card 
                key={news.id} 
                className="group cursor-pointer overflow-hidden hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
              >
                <CardContent className="p-0">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={news.image} 
                      alt={news.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-muted-foreground mb-2 flex items-center gap-2">
                      <Icon name="Calendar" size={14} />
                      {news.date}
                    </p>
                    <h4 className="font-semibold group-hover:text-primary transition-colors">
                      {news.title}
                    </h4>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mt-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Icon name="MessageSquare" size={24} />
                Комментарии
              </h3>
              <p className="text-muted-foreground mb-4">
                Станьте первым, кто оставит комментарий к этой новости
              </p>
              <Button>
                Написать комментарий
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

export default Article;
