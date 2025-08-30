import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [rsvpStatus, setRsvpStatus] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [guests, setGuests] = useState('');
  const [message, setMessage] = useState('');

  const handleRSVP = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle RSVP submission
    console.log({ rsvpStatus, name, email, guests, message });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{ backgroundImage: `url('/img/dc1d78d4-3479-49bc-b371-00e0c56e57bb.jpg')` }}
        />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <Icon name="Heart" size={40} className="text-primary mx-auto mb-6" />
          </div>
          <h1 className="font-cormorant text-6xl md:text-8xl font-light text-foreground mb-6 leading-tight">
            Анна & Сергей
          </h1>
          <div className="w-24 h-px bg-primary mx-auto mb-8"></div>
          <p className="font-open-sans text-xl md:text-2xl text-muted-foreground mb-6">
            Приглашаем вас разделить с нами самый счастливый день в нашей жизни
          </p>
          <div className="space-y-2">
            <p className="font-cormorant text-3xl font-medium text-foreground">15 сентября 2024</p>
            <p className="font-open-sans text-lg text-muted-foreground">15:00</p>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-cormorant text-5xl font-light text-foreground mb-4">
              Место проведения
            </h2>
            <div className="w-16 h-px bg-primary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <Icon name="MapPin" size={24} className="text-primary mt-1" />
                    <div>
                      <h3 className="font-cormorant text-2xl font-medium mb-2">Банкетный зал "Золотой"</h3>
                      <p className="font-open-sans text-muted-foreground mb-4">
                        ул. Пушкинская, 15<br />
                        Москва, Россия
                      </p>
                      <Button variant="outline" className="font-open-sans">
                        <Icon name="Navigation" size={16} className="mr-2" />
                        Построить маршрут
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <Icon name="Clock" size={24} className="text-primary mt-1" />
                    <div>
                      <h3 className="font-cormorant text-2xl font-medium mb-2">Программа дня</h3>
                      <div className="space-y-2 font-open-sans text-muted-foreground">
                        <p>15:00 — Церемония бракосочетания</p>
                        <p>16:00 — Фотосессия и коктейль</p>
                        <p>18:00 — Банкет</p>
                        <p>20:00 — Танцы до утра</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-muted rounded-lg p-8 min-h-96 flex items-center justify-center">
              <div className="text-center">
                <Icon name="Map" size={64} className="text-primary mx-auto mb-4" />
                <p className="font-open-sans text-muted-foreground">Карта будет здесь</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section className="py-24 px-6 bg-card">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-cormorant text-5xl font-light text-foreground mb-4">
              Подтвердите присутствие
            </h2>
            <div className="w-16 h-px bg-primary mx-auto mb-6"></div>
            <p className="font-open-sans text-lg text-muted-foreground max-w-2xl mx-auto">
              Пожалуйста, сообщите нам о своих планах до 1 сентября, чтобы мы могли подготовить всё необходимое
            </p>
          </div>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <form onSubmit={handleRSVP} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="font-open-sans text-sm font-medium">
                      Ваше имя *
                    </Label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="font-open-sans"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-open-sans text-sm font-medium">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="font-open-sans"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <Label className="font-open-sans text-sm font-medium">
                    Сможете ли вы присутствовать? *
                  </Label>
                  <RadioGroup value={rsvpStatus} onValueChange={setRsvpStatus} className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="yes" />
                      <Label htmlFor="yes" className="font-open-sans">
                        Да, с удовольствием буду!
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="no" />
                      <Label htmlFor="no" className="font-open-sans">
                        К сожалению, не смогу присутствовать
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {rsvpStatus === 'yes' && (
                  <div className="space-y-2 animate-fade-in">
                    <Label htmlFor="guests" className="font-open-sans text-sm font-medium">
                      Количество гостей (включая вас)
                    </Label>
                    <Input
                      id="guests"
                      type="number"
                      min="1"
                      max="5"
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="font-open-sans"
                    />
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="message" className="font-open-sans text-sm font-medium">
                    Пожелания или комментарии
                  </Label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="font-open-sans min-h-24"
                    placeholder="Особые пожелания по меню, аллергии или что-то ещё..."
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full md:w-auto font-open-sans font-medium px-8 py-3 text-lg"
                  disabled={!rsvpStatus}
                >
                  Отправить ответ
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-cormorant text-5xl font-light text-foreground mb-4">
            Контакты
          </h2>
          <div className="w-16 h-px bg-primary mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Icon name="Phone" size={32} className="text-primary mx-auto mb-4" />
                <h3 className="font-cormorant text-2xl font-medium mb-3">Анна</h3>
                <p className="font-open-sans text-muted-foreground mb-2">+7 (999) 123-45-67</p>
                <p className="font-open-sans text-muted-foreground">anna@example.com</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Icon name="Phone" size={32} className="text-primary mx-auto mb-4" />
                <h3 className="font-cormorant text-2xl font-medium mb-3">Сергей</h3>
                <p className="font-open-sans text-muted-foreground mb-2">+7 (999) 765-43-21</p>
                <p className="font-open-sans text-muted-foreground">sergey@example.com</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 p-8 bg-card rounded-lg">
            <Icon name="Heart" size={48} className="text-primary mx-auto mb-6" />
            <p className="font-cormorant text-2xl font-light text-foreground mb-4">
              С нетерпением ждём встречи с вами!
            </p>
            <p className="font-open-sans text-muted-foreground">
              Ваше присутствие сделает наш день ещё более особенным
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-open-sans text-sm text-muted-foreground">
            Анна & Сергей • 15 сентября 2024
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;