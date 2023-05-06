var button = $("#button")
var joke = $("#joke")
var jokes = [
    "Ukitaka mwanaume akusaidie kazi jikoni mwambie “NAOMBA CM YAKO NIWASHE TOCHI TAA IMEUNGUA atakusaidia kumulika mpaka unamaliza kazi zako zoote😂",
    "Unapiga kilimo chako unamsomesha girlfriend anafika chuo anakutana na msomi mwenzake anarudi anakwambia unanidai shilingi ngapi..,, Hapo ndo utatambua kwann kinyesi hakina mwiba ila ukikanyaga lazima uchechemee..",
    "KUOA MKE AMBAE HAJASOMA RAHA SANA LEO NIMEMUAMBIA MWEZI HUU HATUTOLIPWA MSHAHARA KWAKUA HAUNA TR 30 KAENDA KUNGALIA KARENDA KARUDI ANANIAMBIA HAMNA SHIDA MME WANGU TUTAVUMILIA TU",
    "SITASAHAU MWAKA ULE AMBAPO NILIPELEKA BARUA YA MAOMBI YANGU YA KAZI KWENYE KAMPUNI MOJA MAARUFU. WAKATI NASUBIRI MAJIBU SIKU MOJA NIKAENDA KWA MAMA NTILIE KUNUNUA MAANDAZI AKANIFUNGIA VIZURI, KUFIKA NYUMBANI HAMU YOTE YA MAANDAZI ILINIISHIA PALE NILIPOGUNDUA KARATASI ILIYOFUNGIWA MAANDAZI NI BARUA YANGU YA KUOMBEA KAZI",
    "Mchungaji mmoja baada ya kuwafungisha ndoa “MASHOGA” wawili alipata wakati mgumu kutamka kuwa “sasa ninyi ni MKE na MUME”atafanyaje wakati wote ni wanaume? mchungaji akapiga moyo konde na kusema “tangu sasa ninyi ni MAN UNITED",
    "..unaenda kuoga, unakumbuka kuwa umesahau sabuni…unaenda kuchukua sabuni kurudi bafuni, unakuta ng’ombe amekunywa maji yote..unaamua kufuata mengne,unarudi unakuta mbuzi kala sabuni…😂😂😂😂",
    "Wadada wembamba hebu nenepeni basi mnatupa tabu kusoma maneno ya kwenye kanga jamanii ………mnaviringisha kanga mwili mara 3 mpaka maandishii hayaonekanii",
    "Wakati unafikiria dingi yako afe ili urithi nyumba, dingi nae anafikiria uanze kufa ili apangishe chumba unacholala.. hiyo inaitwa kufa kufaana.. 😂😂😀😀😀😀😀😀😀 #Hatutaki ujinga",
    "UKIONA MASIKIN KACHINJA KUKU BASI KAT YA KUKU AU YEYE KUNA MMOJA ATAKUA MGONJWA 😆😆😆😆",
    "Huu usharobaro mwingine uchizi. Jamaa kamzimia demu kanisani, mara ukafika mda wa kutoa sadaka, eti jamaa akamwambia ”dont worry bby” ntakulipia!!",
    "KUUMWA AUMWE YEYE LAKN KUJIFANYA ANAJALI SANA BAS UTAMSIKIA BABY KARIBU TUMEZE DAWA",
    "Mama mwenye nyumba anajipodoa anashinda saloon kujipodoa lakini house girl hata mafuta usoni hapaki lakini akipita na khanga yake moja tuu nyumba inatetemeka😂😂😂😂😂😂😂😂😂😂😂😂😂😂 huu mchezo hautaki mekapu",
    "Wadada kama una sura mbaya subiri NEEMA YA BWANA..Sio kutuambia mna uzuri wa Ndani usioonekana..Sisi ni Wanaume,Sio MINYOO",
    "UMESHAWAHI SAIDIWA HOMEWORK NA MZAZI HALAFU UNAPATA ZERO?HAPO NDIO UNAJUA SHIDA SIYO WEWE",
    "Baada ya Talaka mke kamtumia mume meseji:- “Nasikitika kukujulisha kuwa binti uliyemlea kwa miaka 20 sio mtoto wako” Mume akamjibu:- “Duh! Nashukuru Mungu kwani nilikuwa nikiumia rohoni kila siku kwamba nazini na binti yangu” 😂😂😂😂😂😂😂😂😂 🏃🏃🏃🏃🏃🏃🏃🏃🏃",
    "POLISI KAKAMATA MZUNGU ‘yestaday I saw u at ze maize shop..(jana nilikuona dukani kwa muhindi) when u saw me u started 2 six six.(uliponiona ulianza ku-sitasita) u ran n decided 2 plant a car.(ulikimbia na ukaamua kupanda gari) zen u pot-cry me through ze window.(kisha ukanichungulia dirishani) now sleep down n snake well b4 I cut u a millet.(sasa lala chini kisha nyooka vizuri kabla sijakukata mtama) Chezea lugha wewe..!!!",
    "Hakuna Muda Mzuri wa Kulipa Mahari Kama Mwezi January. Baba Mkwe Anapokea Hata Buku Kumi…. 😄😄😛😝😛😝",
    "Nimeingia chumban nikakuta panya wamekula dawa yangu ya minyoo, Na mimi nimechukua yakwao nikanywa. Sipendagi ujinga mm!!",
    "JE WAJUA?.. SHAMBA LAKO LIKIPATIKANA NA DHAHABU NI MALI YA SERIKALI..ILA LIKIPATIKANA NA BANGI NI MALI YAKO",
    "KUNA MAMA MMOJA KAVAMIA BANK UCHI CHA KUSHANGAZA HAKUNA ANAE KUMBUKA USO WAKE😂😂😂😂😂",
    "SITASAHAU MWAKA ULE AMBAPO NILIPELEKA BARUA YA MAOMBI YANGU YA KAZI KWENYE KAMPUNI MOJA MAARUFU. WAKATI NASUBIRI MAJIBU SIKU MOJA NIKAENDA KWA MAMA NTILIE KUNUNUA MAANDAZI AKANIFUNGIA VIZURI, KUFIKA NYUMBANI HAMU YOTE YA MAANDAZI ILINIISHIA PALE NILIPOGUNDUA KARATASI ILIYOFUNGIWA MAANDAZI NI BARUA YANGU YA KUOMBEA KAZI😂😂",
    "LEO NIMEPISHANA NA VITZ IMEANDIKWA, “NEVER TRUST WOMEN IKAJUA HUYU MTU LAZIMA ALIKUAGA NA RANGE ROVER",
    "Mzee moja alikuwa kila usiku anapita mbele ya bank anasimama,kisha anapiga honi,akitoka askari mlinzi,anaondoka.Hilo jambo likamkera sana askari mlinzi, askari akawa na mvizia yule mzee wa kichaga ,siku alipokuja tena akamkamata, akamuuliza kwa nini unakuja unapiga honi kisha unakimbia? Mzee akasema: Haki ya mungu babaangu , Nina pesa zangu ktk account hapa bank naogopa usilale usingizi ndo maana kila siku usiku napita kukuangalia kama umelala!!😂😂😂😂😂😂",
    "Mama mdaku alishangaa kila siku mchungaji anaingia nyumba ya jirani yake ambaye hana mume, akawa anajiuliza anakwenda kufanya nini? Uzalendo ukamshinda akamuuliza “Mwenzangu, mbona kila siku mchungaji anakuja kwako, vipi anakuja kukuombea?” Akajibiwa “Nyoo, umbea tu! Mbona kwako kila siku anakuja mwanajeshi kuna vita! chefuuuu 😳😳😳😳😳",
    "Jamaa alimfumania mtu anazini na mkewe,Akamtoza Faini ya sh 5000 tu,yule mtu akatoa 10000.  Jamaa akasema lala nae tena sina chenji!😀😀😀😀😀😀😀" ,
    "Mlevi mmoja aliona wananchi wakipiga mwizi akawaambia “mwacheni msimpige, hii tabia yenu ya kupiga wezi mtakuja shtukia mnampiga Yesu, maana imeandikwa atakuja kama mwizi!"
    
]
   


$(document).ready(function () {
    
    button.click(function (e) { 
        var index = Math.floor(Math.random() * jokes.length + 1)
        joke.text("Loading....");
        button.deseble = true
        button.text("Fetching")
        setTimeout(() => {
            joke.text(`${jokes[index]}`)
            button.deseble = false
            button.text("Tell me a Joke")
        }, 1000);
    });
});