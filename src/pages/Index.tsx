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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
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
            <div className="flex gap-3 md:hidden">
              <Button variant="ghost" size="icon" onClick={() => scrollToSection('about')}>
                <Icon name="User" size={20} />
              </Button>
              <Button variant="ghost" size="icon" onClick={() => scrollToSection('portfolio')}>
                <Icon name="Palette" size={20} />
              </Button>
              <Button variant="ghost" size="icon" onClick={() => scrollToSection('order')}>
                <Icon name="Mail" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <section id="about" className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                Создаю искусство,<br />
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  которое вдохновляет
                </span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Привет! Я молодая художница, которая превращает идеи в яркие визуальные образы. 
                Работаю в различных техниках: от цифровой графики до масштабной росписи стен.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button onClick={() => scrollToSection('order')} size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Заказать работу
                </Button>
                <Button onClick={() => scrollToSection('portfolio')} variant="outline" size="lg">
                  <Icon name="Eye" size={20} className="mr-2" />
                  Смотреть работы
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-3xl blur-3xl"></div>
              <img
                src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800"
                alt="Художница за работой"
                className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Портфолио</h2>
          <p className="text-center text-muted-foreground mb-12">Мои работы в разных направлениях</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {portfolioCategories.map((category, idx) => (
              <Card 
                key={category.id}
                className="p-6 text-center hover:shadow-xl transition-all cursor-pointer group hover:scale-105 border-2 hover:border-primary animate-slide-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
                onClick={() => scrollToSection(category.id)}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 flex items-center justify-center group-hover:from-primary/20 group-hover:via-secondary/20 group-hover:to-accent/20 transition-colors">
                  <Icon name={category.icon} size={32} className="text-primary group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{category.works.length} работ</p>
              </Card>
            ))}
          </div>

          {portfolioCategories.map((category) => (
            <div key={category.id} id={category.id} className="mb-16">
              <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Icon name={category.icon} size={32} className="text-primary" />
                {category.title}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.works.map((work, idx) => (
                  <Card 
                    key={work.id}
                    className="overflow-hidden group cursor-pointer hover:shadow-2xl transition-all animate-fade-in"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                    onClick={() => setSelectedWork(work.id)}
                  >
                    <div className="relative overflow-hidden h-64">
                      <img 
                        src={work.image} 
                        alt={work.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                        <div className="text-white">
                          <h4 className="font-semibold">{work.title}</h4>
                          <p className="text-sm opacity-90">{work.description}</p>
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

      <section id="order" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Заказать работу</h2>
            <p className="text-muted-foreground text-lg">
              Расскажите о своей идее, и я воплощу её в жизнь
            </p>
          </div>

          <Card className="p-8 shadow-2xl">
            <form className="space-y-6" onSubmit={(e) => {
              e.preventDefault();
              alert('Спасибо за заявку! Я свяжусь с вами в ближайшее время.');
            }}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Ваше имя</label>
                  <Input placeholder="Анна" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Телефон</label>
                  <Input type="tel" placeholder="+7 (999) 123-45-67" required />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input type="email" placeholder="anna@example.com" required />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Тип работы</label>
                <select className="w-full p-2 border border-input rounded-md bg-background">
                  <option>Графика</option>
                  <option>Живопись</option>
                  <option>Иллюстрация</option>
                  <option>Роспись стен</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Описание проекта</label>
                <Textarea 
                  placeholder="Расскажите подробнее о том, что вы хотите заказать..."
                  rows={5}
                  required
                />
              </div>

              <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 transition-opacity">
                <Icon name="Send" size={20} className="mr-2" />
                Отправить заявку
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 bg-muted/50 border-t">
        <div className="container mx-auto text-center">
          <div className="flex justify-center gap-6 mb-6">
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <Icon name="Instagram" size={24} />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <Icon name="Facebook" size={24} />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <Icon name="Mail" size={24} />
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 Арт-студия. Все работы защищены авторским правом.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
