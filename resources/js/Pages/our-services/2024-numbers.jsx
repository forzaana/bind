import CountUp from "react-countup";

const NumbersSection = () => {
    const stats = [
        { id: 1, name: 'Executed Projects', value: '40', prefix: '+' },
        { id: 2, name: 'Work Opportunities', value: '120', prefix: '+' },
        { id: 3, name: 'Published Content', value: '3', prefix: '+', suffix: 'K' },
        { id: 4, name: 'Produced Materials', value: '600', prefix: '+' },
        { id: 5, name: 'Brands', value: '20', prefix: '+' },
        { id: 6, name: 'Countries', value: '05', prefix: '+' },
        { id: 7, name: 'Sponsorship', value: '10', prefix: '+' },
        { id: 8, name: 'Impressions', value: '2', prefix: '+', suffix: 'B' },
    ]

    return (
        <section className="relative bg-gradient-to-bl from-black via-bind-950 to-black">
            <div className="mx-auto max-w-7xl px-6 pb-8 py-16 sm:py-24 lg:px-8 lg:py-32">
                <p data-aos="fade-right" className="text-5xl md:text-7xl text-white font-black">
                    2024 <br/>
                    <span className="font-normal">in Numbers</span>
                </p>

                <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat) => (
                        <div key={stat.id} data-aos="fade-down" className="flex flex-col gap-2 p-8">
                            <dt className="text-large/6 font-normal text-white">{stat.name}</dt>
                            <CountUp start={0} end={stat.value} prefix={stat.prefix} suffix={stat?.suffix} delay={0} enableScrollSpy={true}>
                                {({ countUpRef }) => (
                                    <div>
                                        <span className="order-first text-6xl font-normal tracking-tight text-bind-400" ref={countUpRef} />
                                    </div>
                                )}
                            </CountUp>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    )
}

export default NumbersSection;
