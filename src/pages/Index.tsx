import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [selectedWork, setSelectedWork] = useState<number | null>(null);

  const portfolioCategories = [
    {
      id: 'graphics',
      title: 'Графика',
      icon: 'Palette',
      works: [
        { id: 1, title: 'Графическая работа 1', description: 'Цифровая иллюстрация', image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600' },
        { id: 2, title: 'Графическая работа 2', description: 'Минималистичный дизайн', image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600' },
        { id: 3, title: 'Графическая работа 3', description: 'Геометрические формы', image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600' },
        { id: 4, title: 'Графическая работа 4', description: 'Абстракция', image: 'https://images.unsplash.com/photo-1551732998-9518b4c8d681?w=600' },
      ]
    },
    {
      id: 'painting',
      title: 'Живопись',
      icon: 'Brush',
      works: [
        { id: 5, title: 'Живопись 1', description: 'Масло на холсте', image: 'https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=600' },
        { id: 6, title: 'Живопись 2', description: 'Акриловые краски', image: 'https://images.unsplash.com/photo-1533158326339-7f3cf2404354?w=600' },
        { id: 7, title: 'Живопись 3', description: 'Смешанная техника', image: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=600' },
        { id: 8, title: 'Живопись 4', description: 'Портрет', image: 'https://images.unsplash.com/photo-1578926078223-f11ce9c95a58?w=600' },
      ]
    },
    {
      id: 'illustration',
      title: 'Иллюстрации',
      icon: 'PenTool',
      works: [
        { id: 9, title: 'Иллюстрация 1', description: 'Книжная иллюстрация', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600' },
        { id: 10, title: 'Иллюстрация 2', description: 'Детская книга', image: 'https://images.unsplash.com/photo-1577083552792-a0d461cb1dd6?w=600' },
        { id: 11, title: 'Иллюстрация 3', description: 'Журнальная графика', image: 'https://images.unsplash.com/photo-1634985861798-0b30cd0a27d6?w=600' },
        { id: 12, title: 'Иллюстрация 4', description: 'Постер', image: 'https://images.unsplash.com/photo-1596548438137-d51ea5c83ca5?w=600' },
      ]
    },
    {
      id: 'murals',
      title: 'Роспись стен',
      icon: 'Sparkles',
      works: [
        { id: 13, title: 'Роспись 1', description: 'Кафе в центре города', image: 'https://images.unsplash.com/photo-1561214078-47a3f6ded1a0?w=600' },
        { id: 14, title: 'Роспись 2', description: 'Детская комната', image: 'https://images.unsplash.com/photo-1582571701930-1aed3b61c6e7?w=600' },
        { id: 15, title: 'Роспись 3', description: 'Офисное пространство', image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=600' },
        { id: 16, title: 'Роспись 4', description: 'Уличный мурал', image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600' },
      ]
    }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border/50 shadow-sm">
        <div className="container mx-auto px-3 sm:px-4 py-3">
          <div className="flex items-center justify-between">
            <h1 className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Арт-студия
            </h1>
            <div className="hidden md:flex gap-6">
              {['about', 'portfolio', 'order'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {section === 'about' ? 'Обо мне' : section === 'portfolio' ? 'Портфолио' : 'Заказать'}
                </button>
              ))}
            </div>
            <div className="flex gap-1 md:hidden">
              <Button 
                variant={activeSection === 'about' ? 'default' : 'ghost'} 
                size="sm" 
                onClick={() => scrollToSection('about')}
                className="h-9 px-3"
              >
                <Icon name="User" size={18} />
              </Button>
              <Button 
                variant={activeSection === 'portfolio' ? 'default' : 'ghost'} 
                size="sm" 
                onClick={() => scrollToSection('portfolio')}
                className="h-9 px-3"
              >
                <Icon name="Palette" size={18} />
              </Button>
              <Button 
                variant={activeSection === 'order' ? 'default' : 'ghost'} 
                size="sm" 
                onClick={() => scrollToSection('order')}
                className="h-9 px-3"
              >
                <Icon name="Mail" size={18} />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <section id="about" className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-3 sm:px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6 animate-fade-in">
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
                Создаю искусство,<br />
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  которое вдохновляет
                </span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                Привет! Я молодая художница, которая превращает идеи в яркие визуальные образы. 
                Работаю в различных техниках: от цифровой графики до масштабной росписи стен.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button onClick={() => scrollToSection('order')} size="lg" className="w-full sm:w-auto bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Заказать работу
                </Button>
                <Button onClick={() => scrollToSection('portfolio')} variant="outline" size="lg" className="w-full sm:w-auto">
                  <Icon name="Eye" size={20} className="mr-2" />
                  Смотреть работы
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in mt-6 md:mt-0">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-2xl sm:rounded-3xl blur-2xl sm:blur-3xl"></div>
              <img
                src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800"
                alt="Художница за работой"
                className="relative rounded-2xl sm:rounded-3xl shadow-2xl w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-12 sm:py-20 px-3 sm:px-4 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4">Портфолио</h2>
          <p className="text-center text-sm sm:text-base text-muted-foreground mb-8 sm:mb-12">Мои работы в разных направлениях</p>
          
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-8 sm:mb-12">
            {portfolioCategories.map((category, idx) => (
              <Card 
                key={category.id}
                className="p-3 sm:p-6 text-center hover:shadow-xl transition-all cursor-pointer group active:scale-95 sm:hover:scale-105 border-2 hover:border-primary animate-slide-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
                onClick={() => scrollToSection(category.id)}
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2 sm:mb-4 rounded-full bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 flex items-center justify-center group-hover:from-primary/20 group-hover:via-secondary/20 group-hover:to-accent/20 transition-colors">
                  <Icon name={category.icon} size={24} className="sm:w-8 sm:h-8 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-sm sm:text-xl font-semibold">{category.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1 sm:mt-2">{category.works.length} работ</p>
              </Card>
            ))}
          </div>

          {portfolioCategories.map((category) => (
            <div key={category.id} id={category.id} className="mb-10 sm:mb-16">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-8 flex items-center gap-2 sm:gap-3">
                <Icon name={category.icon} size={24} className="sm:w-8 sm:h-8 text-primary" />
                {category.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
                {category.works.map((work, idx) => (
                  <Card 
                    key={work.id}
                    className="overflow-hidden group cursor-pointer active:scale-95 sm:hover:shadow-2xl transition-all animate-fade-in"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                    onClick={() => setSelectedWork(work.id)}
                  >
                    <div className="relative overflow-hidden h-40 sm:h-52 md:h-64">
                      <img 
                        src={work.image} 
                        alt={work.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent sm:opacity-0 sm:group-hover:opacity-100 transition-opacity flex items-end p-2 sm:p-4">
                        <div className="text-white">
                          <h4 className="text-xs sm:text-sm font-semibold">{work.title}</h4>
                          <p className="text-xs sm:text-sm opacity-90 hidden sm:block">{work.description}</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="order" className="py-12 sm:py-20 px-3 sm:px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">Заказать работу</h2>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
              Расскажите о своей идее, и я воплощу её в жизнь
            </p>
          </div>

          <Card className="p-4 sm:p-8 shadow-2xl">
            <form className="space-y-4 sm:space-y-6" onSubmit={(e) => {
              e.preventDefault();
              alert('Спасибо за заявку! Я свяжусь с вами в ближайшее время.');
            }}>
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-1.5 sm:space-y-2">
                  <label className="text-xs sm:text-sm font-medium">Ваше имя</label>
                  <Input placeholder="Анна" required className="text-sm sm:text-base" />
                </div>
                <div className="space-y-1.5 sm:space-y-2">
                  <label className="text-xs sm:text-sm font-medium">Телефон</label>
                  <Input type="tel" placeholder="+7 (999) 123-45-67" required className="text-sm sm:text-base" />
                </div>
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                <label className="text-xs sm:text-sm font-medium">Email</label>
                <Input type="email" placeholder="anna@example.com" required className="text-sm sm:text-base" />
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                <label className="text-xs sm:text-sm font-medium">Тип работы</label>
                <select className="w-full p-2 border border-input rounded-md bg-background text-sm sm:text-base">
                  <option>Графика</option>
                  <option>Живопись</option>
                  <option>Иллюстрация</option>
                  <option>Роспись стен</option>
                </select>
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                <label className="text-xs sm:text-sm font-medium">Описание проекта</label>
                <Textarea 
                  placeholder="Расскажите подробнее о том, что вы хотите заказать..."
                  rows={4}
                  required
                  className="text-sm sm:text-base min-h-[100px] sm:min-h-[120px]"
                />
              </div>

              <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 transition-opacity text-sm sm:text-base h-11 sm:h-12">
                <Icon name="Send" size={18} className="mr-2 sm:w-5 sm:h-5" />
                Отправить заявку
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <footer className="py-8 sm:py-12 px-3 sm:px-4 bg-muted/50 border-t">
        <div className="container mx-auto text-center">
          <div className="flex justify-center gap-4 sm:gap-6 mb-4 sm:mb-6">
            <Button variant="ghost" size="icon" className="hover:text-primary h-10 w-10 sm:h-11 sm:w-11">
              <Icon name="Instagram" size={20} className="sm:w-6 sm:h-6" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary h-10 w-10 sm:h-11 sm:w-11">
              <Icon name="Facebook" size={20} className="sm:w-6 sm:h-6" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary h-10 w-10 sm:h-11 sm:w-11">
              <Icon name="Mail" size={20} className="sm:w-6 sm:h-6" />
            </Button>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground px-4">
            © 2024 Арт-студия. Все работы защищены авторским правом.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;