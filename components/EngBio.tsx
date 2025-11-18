type Props = {};

export default function EngBio({}: Props) {
    const introduction = [
        "I was born on May 19, 2003 in Kaposvár, in a family of musicians! My musical studies: I played the piano until 2016, in 2014 I won first place at the National Budapest Piano Competition.",
        "Since 2016, I have been attending Margit Földessy‘s art school.",
    ];

    const actingRoles = [
        "•⁠ ⁠Juliet - “Romeo and Juliet,” Pest Hungarian Theatre - Directed by Károly Eperjes",
        "•⁠ ⁠Cécile de Volanges - “Dangerous Liaisons,” Operetta Theatre - Directed by Csaba Kiss",
        "•⁠ ⁠Roxie Hart - “Chicago,” Sopron Petőfi Theatre - Directed by Károly Eperjes",
        "•⁠ ⁠Princess - “Stravinsky: The Soldiers Tale” national tour - Directed by Tamás Ascher Film Roles",
        "•⁠ ⁠Piano Girl - “Those Who Stayed” feature film - Directed by Barnabás Tóth",
        "•⁠ ⁠Csinszka - “Fading in the Embrace,” theatre film at Madách Theatre - Directed by Ádám Horgas",
        "•⁠ ⁠Zoé - “Caravan,” short film - Directed by Szonja Szabó •⁠ ⁠Vörös - “Who Are You” - series on RTL+",
        "•⁠ ⁠Hanna - “What Are We Waiting For?” short film - Directed by Márton Csukás",
        "•⁠ ⁠Orsi - “Orsi and Tensinham,” short film - Directed by Fanny Szilágyi",
        "•⁠ ⁠Franciska - “Falcons,” short film - Directed by Szonja Szabó",
        "•⁠ ⁠The Model - music video - Groove Armada, “Edge of the Horizon,” directed by Theano Kapareli",
        "•⁠ ⁠The Girl - music video - “Hawlin,” directed by Dalma Franciska",
    ];

    const featureLead =
        "First Leading Role in a Feature Film: •⁠ ⁠Lead Role: Marika Ábel - “Almost a Bride,” feature film - Directed by József Pacskovszky";

    const latestWorks = [
        "Latest works:",
        "Nyina- Chekhov-Seagull -Enikő Eszenyi masterclass - Hungary, Csenger",
        "Wife - Imre Kertész - Khaddis for an unborn child - 2 actors and 5 musicians, a tour of 10 performances in commemoration of the 80th anniversary of the Hungarian Holocaust.",
    ];

    const awards = [
        "Yasha -The Cherry Orchard - RCS - Hugh Hodgart",
        "Marian - The Apples Family - RCS - Peter Collins",
        "most prestigious film award:",
        "nomination for best actress in film- Mozgókép festival",
    ];

    const cardClass =
        "rounded-[28px] border border-rose-100 bg-white/80 p-6 shadow-lg";

    return (
        <div className="space-y-6 text-slate-700">
            <section className={cardClass}>
                <div className="space-y-4 text-base leading-relaxed">
                    {introduction.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                    ))}
                </div>
            </section>

            <section className={cardClass}>
                <h3 className="text-lg font-semibold text-rose-500">
                    Hanna Kelemen Acting History
                </h3>
                <p className="mt-4 text-sm uppercase tracking-[0.4em] text-rose-300">
                    Roles from 2019-2023 in Theatres and Films: Theatre
                </p>
                <ul className="mt-4 space-y-3 text-base leading-relaxed">
                    {actingRoles.map((role) => (
                        <li key={role}>{role}</li>
                    ))}
                </ul>
            </section>

            <section className="grid gap-6 md:grid-cols-2">
                <article className={cardClass}>
                    <p className="text-base leading-relaxed">{featureLead}</p>
                </article>
                <article className={cardClass}>
                    <div className="space-y-3 text-base leading-relaxed">
                        {latestWorks.map((item) => (
                            <p key={item}>{item}</p>
                        ))}
                    </div>
                </article>
            </section>

            <section className={cardClass}>
                <h3 className="text-lg font-semibold text-rose-500">
                    Most prestigious film award:
                </h3>
                <ul className="mt-4 space-y-3 text-base leading-relaxed">
                    {awards.map((award) => (
                        <li key={award}>{award}</li>
                    ))}
                </ul>
            </section>
        </div>
    );
}
