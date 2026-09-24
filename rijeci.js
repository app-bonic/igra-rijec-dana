// Česte hrvatske imenice od 5 slova (DŽ, LJ, NJ = jedno slovo). Riječi koje nemaju točno 5 slova igra sama preskače.
window.RIJECI_5 = `
avion balon banka barka bazen berba biser bitka blato bomba borba brada brana breza cesta cijev crkva čamac čelik čizma
daska datum dolar dušek duhan fazan glava glina gljiva grana grozd gusar hlače hrast igrač jakna jedro jelen jezik karta
kavez kiosk klupa knjiga kocka kolač konac konop kopar kotač kovač krava krema krilo kruna kuhar kupus labud lampa lanac
lasta lavor lijek lokva lonac lopta lotos lovac lutka magla majka marka maska metla metak miris molba mrkva mačka nosač
novac obala oblak okvir olovo orkan palac palma papir pasta patka pekar pepeo pismo plašt plima ploča posao potok prase
ptica puška radio rampa rotor sanke sapun sedlo sirup skela slama slika sloga snaga sokol splav sreća staza strop suknja
sunce šator šešir šetnja škola škare šljiva štala tanjur tepih tigar tinta tisak toranj torba torta traka trava truba tunel
ulica vatra vepar veslo vijak višnja vitez voćka vrana vrata vreća vrtić zamka zebra zemlja zlato zmija zvono žlica
aroma atlas bager bajka bakar balet barut blago bluza bubanj burek cigla čekić četka drama dućan fenjer flota forma gazda
golub grmlje guska iskra jarac jasle javor jelka jutro kabel kamen kanta kazna klima kofer koplje korak kukac kvaka letak
limun lišće ljiljan mango moljac mozak muzej obrva oluja oruđe ponoć porez pravo pruga račun robot rukav sajam sidro sjena
smola stado stroj šaran šifra šipak špilja štene tabla tikva tipka tkanje trska ugljen večer vidra zamak žbuka
`.trim().split(/\s+/);
