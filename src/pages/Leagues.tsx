import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Leagues = () => {
  const rplTable = [
    { pos: 1, team: "Зенит", played: 20, wins: 15, draws: 3, losses: 2, goals: "45:15", points: 48 },
    { pos: 2, team: "Спартак", played: 20, wins: 13, draws: 4, losses: 3, goals: "38:20", points: 43 },
    { pos: 3, team: "ЦСКА", played: 20, wins: 12, draws: 5, losses: 3, goals: "35:18", points: 41 },
    { pos: 4, team: "Краснодар", played: 20, wins: 11, draws: 6, losses: 3, goals: "32:22", points: 39 },
    { pos: 5, team: "Локомотив", played: 20, wins: 10, draws: 5, losses: 5, goals: "28:23", points: 35 }
  ];

  const topScorers = [
    { pos: 1, name: "Александр Иванов", team: "Спартак", goals: 15 },
    { pos: 2, name: "Антон Новиков", team: "Краснодар", goals: 13 },
    { pos: 3, name: "Артём Дзюба", team: "Зенит", goals: 12 },
    { pos: 4, name: "Фёдор Смолов", team: "ЦСКА", goals: 11 },
    { pos: 5, name: "Максим Глушенков", team: "Локомотив", goals: 10 }
  ];

  const upcomingMatches = [
    { date: "05.01", time: "16:00", home: "Спартак", away: "ЦСКА", league: "РПЛ" },
    { date: "05.01", time: "19:00", home: "Зенит", away: "Локомотив", league: "РПЛ" },
    { date: "06.01", time: "14:00", home: "Краснодар", away: "Динамо", league: "РПЛ" },
    { date: "06.01", time: "17:00", home: "Ростов", away: "Урал", league: "РПЛ" }
  ];

  const worldLeagues = [
    { name: "Английская Премьер-Лига", leader: "Ливерпуль", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
    { name: "Ла Лига", leader: "Реал Мадрид", flag: "🇪🇸" },
    { name: "Серия А", leader: "Интер", flag: "🇮🇹" },
    { name: "Бундеслига", leader: "Бавария", flag: "🇩🇪" },
    { name: "Лига 1", leader: "ПСЖ", flag: "🇫🇷" }
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
                <a href="/leagues" className="text-primary transition-colors font-medium">
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
            <Icon name="Trophy" size={40} className="text-primary" />
            Лиги
          </h1>
          <p className="text-muted-foreground text-lg">
            Турнирные таблицы, календарь матчей и статистика
          </p>
        </div>

        <Tabs defaultValue="rpl" className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <TabsList className="grid w-full max-w-md grid-cols-3 mb-8">
            <TabsTrigger value="rpl">РПЛ</TabsTrigger>
            <TabsTrigger value="calendar">Календарь</TabsTrigger>
            <TabsTrigger value="world">Мир</TabsTrigger>
          </TabsList>

          <TabsContent value="rpl" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="BarChart3" size={24} className="text-primary" />
                  Турнирная таблица РПЛ
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-12">#</TableHead>
                        <TableHead>Команда</TableHead>
                        <TableHead className="text-center">И</TableHead>
                        <TableHead className="text-center">В</TableHead>
                        <TableHead className="text-center">Н</TableHead>
                        <TableHead className="text-center">П</TableHead>
                        <TableHead className="text-center">Мячи</TableHead>
                        <TableHead className="text-center font-bold">О</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {rplTable.map((team) => (
                        <TableRow key={team.pos} className="hover:bg-muted/50">
                          <TableCell className="font-bold">
                            {team.pos === 1 ? (
                              <Badge className="bg-primary">{team.pos}</Badge>
                            ) : team.pos <= 3 ? (
                              <Badge variant="secondary">{team.pos}</Badge>
                            ) : (
                              team.pos
                            )}
                          </TableCell>
                          <TableCell className="font-semibold">{team.team}</TableCell>
                          <TableCell className="text-center">{team.played}</TableCell>
                          <TableCell className="text-center text-green-500">{team.wins}</TableCell>
                          <TableCell className="text-center text-yellow-500">{team.draws}</TableCell>
                          <TableCell className="text-center text-red-500">{team.losses}</TableCell>
                          <TableCell className="text-center">{team.goals}</TableCell>
                          <TableCell className="text-center font-bold text-primary">{team.points}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Target" size={24} className="text-secondary" />
                  Топ бомбардиров
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topScorers.map((scorer) => (
                    <div 
                      key={scorer.pos} 
                      className="flex items-center justify-between p-4 rounded-lg bg-card border border-border hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                          scorer.pos === 1 ? 'bg-primary text-primary-foreground' :
                          scorer.pos === 2 ? 'bg-secondary text-secondary-foreground' :
                          scorer.pos === 3 ? 'bg-orange-500 text-white' :
                          'bg-muted text-muted-foreground'
                        }`}>
                          {scorer.pos}
                        </div>
                        <div>
                          <div className="font-semibold">{scorer.name}</div>
                          <div className="text-sm text-muted-foreground flex items-center gap-1">
                            <Icon name="Shield" size={14} />
                            {scorer.team}
                          </div>
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-primary">
                        {scorer.goals}
                        <span className="text-sm text-muted-foreground ml-1">⚽</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="calendar" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Calendar" size={24} className="text-primary" />
                  Ближайшие матчи
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingMatches.map((match, index) => (
                    <Card key={index} className="bg-muted/30 border-border/50">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <div className="text-center">
                              <div className="text-sm font-semibold text-muted-foreground">{match.date}</div>
                              <div className="text-lg font-bold text-primary">{match.time}</div>
                            </div>
                            <Badge variant="outline">{match.league}</Badge>
                          </div>
                          
                          <div className="flex items-center justify-center gap-4 flex-1">
                            <div className="text-right font-semibold flex-1">{match.home}</div>
                            <div className="text-muted-foreground font-bold">VS</div>
                            <div className="text-left font-semibold flex-1">{match.away}</div>
                          </div>

                          <Button variant="outline" size="sm">
                            <Icon name="Bell" size={16} className="mr-2" />
                            Напомнить
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
              <CardContent className="p-6 text-center">
                <Icon name="Calendar" size={48} className="mx-auto text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Полный календарь</h3>
                <p className="text-muted-foreground mb-4">
                  Смотрите расписание всех матчей сезона
                </p>
                <Button>
                  Открыть календарь
                  <Icon name="ArrowRight" size={18} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="world" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {worldLeagues.map((league, index) => (
                <Card 
                  key={index} 
                  className="group cursor-pointer overflow-hidden hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="p-6">
                    <div className="text-5xl mb-4">{league.flag}</div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {league.name}
                    </h3>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="TrendingUp" size={16} />
                      <span className="text-sm">Лидер: <span className="font-semibold text-foreground">{league.leader}</span></span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardContent className="p-8 text-center">
                <Icon name="Globe" size={48} className="mx-auto text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-2">Следите за мировым футболом</h3>
                <p className="text-muted-foreground mb-6">
                  Получайте обновления о ведущих европейских лигах
                </p>
                <Button className="bg-primary hover:bg-primary/90">
                  Подписаться на уведомления
                  <Icon name="Bell" size={18} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
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

export default Leagues;
