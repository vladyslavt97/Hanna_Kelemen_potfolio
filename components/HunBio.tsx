import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { HiDownload } from "react-icons/hi";

type Props = {};

export default function HunBio({}: Props) {
    const cardClass =
        "rounded-[28px] border border-rose-100 bg-white/80 p-6 shadow-lg";

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.2 }}
            className="space-y-8 text-slate-800"
        >
            <section className={cardClass}>
                <div className="space-y-4 text-base leading-relaxed">
                    <p>
                        <b className="font-bold text-blue-900">
                            Iskolai tanulmányok:{" "}
                        </b>
                        Gimnáziumi tanulmányok-Kodály Zoltán Ének-Zenei AMI. és
                        Gimnázium 2 év alatt összvonva 4 évet magántanulókémt
                        vizsgáztam és érettségiztem
                    </p>
                    <p>
                        <b className="font-bold text-blue-900">
                            Zeneiskola:{" "}
                        </b>
                        Ádám Jenő Zeneiskola zongora, gitár
                    </p>
                    <p>
                        10 évesen Országos Zongoraversenyen 1. díjat nyertem
                    </p>
                    <p>
                        <b className="font-bold text-blue-900">Nyelvvizsga: </b>
                        2023-ban sikeres IELTS (7.5) felsőfokú angol
                        nyelvvizsgát tettem.
                    </p>
                </div>
            </section>

            <section className={cardClass}>
                <span className="flex justify-center text-lg font-bold text-blue-900">
                    Színház
                </span>
                <h3 className="text-center text-base">
                    2019-2023 között szerepeim színházakban, filmekben
                </h3>
                <div className="mt-4 space-y-3 text-base leading-relaxed">
                    <Link
                        href="https://www.youtube.com/watch?v=SGCUxyYyr6g"
                        className="underline"
                    >
                        <b className="font-bold text-blue-900">Júlia</b> -
                        “Rómeó és Júlia”, Pesti Magyar Színház - Eperjes Károly
                        rendezésében
                    </Link>
                    <Link
                        href="https://www.youtube.com/watch?v=JfUUUcPDKJk"
                        className="underline"
                    >
                        <b className="font-bold text-blue-900">
                            Cécile de Volanges
                        </b>{" "}
                        - “Veszedelmes Viszonyok” , Operett színház - Kiss
                        Csaba rendezésében
                    </Link>
                    <p>
                        <b className="font-bold text-blue-900">Roxie Hart</b> -
                        “ Chicago”, Soproni Petőfi Színház - Eperjes Károly
                        rendezésében
                    </p>
                    <p>
                        <b className="font-bold text-blue-900">Királylány</b> -
                        “Sztravinszky: A Katona Története” országos turné -
                        Ascher Tamás rendezésében
                    </p>
                </div>
            </section>

            <section className={cardClass}>
                <span className="flex justify-center text-lg font-bold text-blue-900">
                    Filmszerepek
                </span>
                <motion.div
                    initial={{ opacity: 0, x: 10, y: 5 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative my-5 flex justify-center"
                >
                    <Image
                        src="/gallery/modelling/72.jpg"
                        alt=""
                        width={300}
                        height={300}
                        priority={true}
                        className="w-[290px] rounded-2xl shadow-white"
                    />
                </motion.div>
                <div className="space-y-3 text-base leading-relaxed">
                    <p>
                        <b className="font-bold text-blue-900">Csinszka</b> -
                        “Elfogyni az Ölelésben”, színház-film, Madách színházban
                        - Horgas Ádám rendezésében
                    </p>
                    <p>
                        <b className="font-bold text-blue-900">Zoé</b> -
                        “Karaván” ,kisfilm - Szabó Szonja rendezésében
                    </p>
                    <p>
                        <b className="font-bold text-blue-900">Vörös</b> - “Ki
                        vagy te” - sorozat “ RTL+
                    </p>
                    <p>
                        <Link
                            href="https://www.youtube.com/watch?v=j5MC0O7m4Zk"
                            className="underline"
                        >
                            <b className="font-bold text-blue-900">Hanna</b> -
                            “What are we waiting for?”kisfilm - Csukás Márton
                            rendezésében
                        </Link>
                    </p>
                    <p>
                        <b className="font-bold text-blue-900">Orsi</b> - “Orsi
                        és Tensinham” ,kisfilm - Szilágyi Fanny rendezésében
                    </p>
                    <p>
                        <b className="font-bold text-blue-900">Franciska</b>-
                        “Vércsék”,kisfilm - Szabó Szonja rendezésében
                    </p>
                    <p>
                        <b className="font-bold text-blue-900">A model</b> -
                        klip - Groove Armada együttes - Edge of the horizon,
                        Theano Kapareli rendezésében
                    </p>
                    <p>
                        <b className="font-bold text-blue-900">A lány: </b> -
                        klip- “Hawlin”- Franciska Dalma rendezésében
                    </p>
                    <p>
                        Első nagyjátékfilm kosztümös főszerepem jelenleg
                        forgatom:
                    </p>
                    <p>
                        <b className="font-bold text-blue-900">
                            Főszerep “Majdnem Menyasszony”
                        </b>
                        , nagy játékfilm - Pacskovszky József rendezésében
                    </p>
                    <p>
                        <Link
                            href="https://www.youtube.com/watch?v=d-5jBKAcYR8"
                            className="font-bold text-blue-900 underline"
                        >
                            Saját dalok, ének
                        </Link>
                    </p>
                </div>
            </section>

            <section className={cardClass}>
                <motion.div
                    initial={{ opacity: 0, x: 10, y: 5 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="flex justify-center"
                >
                    <Image
                        src="/slovenia.jpeg"
                        alt=""
                        width={300}
                        height={300}
                        priority={true}
                        className="my-5 w-[290px] rounded-2xl shadow-white md:w-[400px]"
                    />
                </motion.div>
                <div className="space-y-4 text-base leading-relaxed">
                    <p>
                        <b className="font-bold text-blue-900">Magamról:</b>
                    </p>
                    <p>
                        Kelemen Hanna vagyok, komolyzenész-pedagógus-műveszcsaládban
                        születtem, mindkét szülőm hegedűművész - Zeneakadémiai
                        tanár, mindegyik nagyszülőm klasszikus zenész,
                        pedagógus. 12 éves koromig zongoristának készültem, 13
                        éves koromtól Földessy Margit színitanodájába jártam,
                        akit a mai napig tanáromnak tudhatok. 14 évesen Kölnbe
                        költözött családunk, ott jártam iskolába és Kölni Dóm
                        gyermekkórusában énekeltem.
                    </p>
                    <p>
                        15-16 éves koromban elszerződtem az Attractive Models
                        ügynökséghez Budapesten és sokat dolgoztam modellként.
                        15 és 16 éves koromban kétszer 2 és fél hónapot Tokióban
                        éltem (önállóan) modellként dolgoztam (Cameron Diaz
                        ügynökségénél). Földessy Margit színitanodájában
                        szerettem bele a színészetbe. A színház világával
                        komolyan akkor találkoztam, amikor 15 évesen Eperjes
                        Károly felkért Júlia szerepére.
                    </p>
                    <p>
                        17 évesen volt az első premierem a Pesti Magyar
                        Színházban Júliaként, amit 2022-ig játszottunk. 16
                        évesen magántanuló lettem, hogy a 4 évnyi gimnáziumot 2
                        év alatt letehessem az érettségivel együtt. 18-19 évesen
                        ez idő alatt még 3 premierem volt: a “Veszedelmes
                        Viszonyok”következett, (2022, rendező: Kiss Csaba),
                        melyben Cécile szerepébe bújtam az Operett Színházban.
                    </p>
                    <p>
                        Csinszka (film)szerepét játszhaKam Horgas Ádám Ady
                        adaptációban: “Elfogyni az ölelésben” című filmben
                        (2021-2022) a Madách Színházban. 2022-2023-ban
                        Sztravinszkij: A Katona története színdarabban, a
                        királykisasszony lehettem, amit eljátszottunk
                        Magyarország 9 városának színházában s koncerttermeiben:
                        Kaposvár, Veszprém, Szeged, Budapest-Zeneakadémia,
                        Budapest-Magyar Zene Háza,s valamint Kolozsvár,
                        Marosvásárhely, Csíkszereda, és Székelyudvarhely
                        közönségének.
                    </p>
                    <p>
                        2023-ban a Chicago Musicaljében (rendező: Eperjes Károly)
                        Roxie szerepét játszottam a Soproni Színházban. 2020 óta
                        számos film, sorozat, videoklip és reklám főszereplője
                        lehettem:“Mire várunk?” (Csukás Márton, 2020), “Karaván”
                        c. rövidfilm (Szabó Szonja, 2020), “Indulj el” (Szakács
                        Gergő, 2021), “Hawlin”(Franciska Dalma, 2021), “Haloween”
                        (TV reklám, 2021), “Ki vagy Te?” (RTL+ csatornán, 2022
                        június-augusztus, “Vörös” szerepe, “Majdnem Menyasszony”
                        (Pacskovszky József, 2023 július).
                    </p>
                    <p>
                        Hálás vagyok színész tanáraim munkájának, akik ezalatt az
                        időszak alatt segítettek:
                    </p>
                    <p>
                        Földessy Margit, Eperjes Károly, Toroczkayné Lucia,
                        Cserhalmi György, Salamon András, Túroczy Szabolcs és
                        Kerekes Vica.
                    </p>
                    <p>
                        Büszke vagyok rá, hogy 2019-2022 között olyan
                        színészekkel és rendezőkkel dolgozhattam, mint:
                    </p>
                    <p>
                        Molnár Piroska, ifj. Vidnyánszky Attila, Eperjes Károly,
                        Bezerédi Zoltán, Haumann Máté, Trokán Anna, Papadimitriu
                        Athina, Kakassy Dóra, Botos Éva, Nagy Sándor, Soltézs
                        Bözse, Peller Anna, Cseh, Dávid Péter, Janza Kata, Kubik
                        Petra, Kocsis Dénes, Polyák Lilla Ascher Tamás
                    </p>
                    <p>
                        Az éneklés gyermekkorom óta az életem fontos része:
                        többféle formációban énekelek jazz- fusion-
                        gospel-könnyűzene stílusban olyan művészekkel, mint
                        Szakcsi Lakatos Róbert, Sárközi Lajos jr. Most is több
                        nagyszabású tervvel állok az idei nyári fesztiválok előtt
                        több együttessel. Egyedül gyakran kísérem magam zongorán
                        és gitáron. Minél több hangszeren szeretnék játszani,
                        most épp dobolni kezdtem el. De ettől függetlenül semmi
                        sem tesz boldogabbá, mint a közös zenélés és a
                        színjátszás.
                    </p>
                    <p>
                        A nyelvtanulás rendkívül fontos számomra. Felsőfokú
                        angolon és magyaron kívül a német nyelven és a
                        franciámon is dolgozom napi szinten, hogy néhány év múlva
                        jól beszélhessem őket. Tervem, hogy színészként is
                        kamatoztathassam nyelvtudásomat.
                    </p>
                    <p>
                        Családommal, 3 testvéremmel mai napig sok időt töltök,
                        kisebb tesvéreimnek szüntelenül próbálok belátást
                        nyújtani a színházi világba, gyakran viszem el őket
                        főpróbáimra, előadásaimra. Rendszeresen járok
                        kiskutyámmal futni, edzeni, nagyon szeretem a sportot és
                        boldog vagyok, mert a skót egyetem nagy hangsúlyt fektet
                        a mozgásra én pedig már hosszú ideje tervezem még
                        komolyabban venni a színapdi mozgáskultúrám fejlesztését
                        s az állóképességem növelését. A futás számomra akárcsak
                        egy meditáció, sokszor verseket, szövegeket, darabokat
                        memorizálok, mialatt körbe futom a Margitszigetet.
                        Hobbim: kézműves tárgyak készítése, festeni, rajzolni,
                        nemezelni, gyöngyöt fűzni mind nagyon szeretek s mindig
                        találok új foglalkozást, amelyben alkotni tudok.
                    </p>
                    <p>
                        <b className="font-bold text-blue-900">
                            Példaképeim:
                        </b>
                    </p>
                    <p>
                        Judy Dench, angol színész. Drámái és Shakespear-i
                        alakításai ikonikusak, színházban és filmben
                        (Hollywood-i és művész filmekben) egyaránt intenzíven
                        jelen van, emellett nagyon kedveli a magyar költészetet
                        és irodalmat. Christoph Waltz, osztrák színész, azon
                        kívül, hogy különleges színész tehetség, képes a
                        színészetében kamatoztatni nyelvtudását. Stella
                        Skarsgård, Depardieu-höz hasonlóan egyszerre az
                        egyetemes, s az ő esetében a svéd kulturális örökség
                        felemelésében s megismertetésében tett felbecsülhetetlen
                        lépéseket.
                    </p>
                    <p>
                        Én - hozzájuk hasonlóan - a magyar kultúra, hagyomány és
                        művészet örökség megőrzése és fejlesztése érdekében
                        bízom abban, hogy sokat tudok hozzátenni a színházi
                        világ, a filmművészet, a zene, zenés színházak
                        lemezfelvételek, videoklippek és minden ehhez tartozó
                        művészeti ágazat szenvedélyes művelésével!
                    </p>
                </div>
            </section>

            <div className="flex justify-center">
                <a
                    href="/Kelemen Hanna_2023.pdf"
                    download
                    className="flex w-60 flex-row justify-center rounded-full bg-rose-500 px-4 py-3 font-bold text-white shadow-xl transition hover:bg-rose-600"
                >
                    Életrajz letöltése
                    <HiDownload className="ml-2 text-xl" />
                </a>
            </div>
        </motion.div>
    );
}
