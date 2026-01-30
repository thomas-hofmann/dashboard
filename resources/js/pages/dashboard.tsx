import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { ArrowUpRight, Box, CalendarClock, Gauge, Globe, Sparkles, Users } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function Dashboard() {
    const kpis = [
        { label: 'Active campaigns', value: '18', delta: '+4', note: 'this week' },
        { label: 'Conversion lift', value: '23.4%', delta: '+2.1%', note: 'vs last cycle' },
        { label: 'Avg. lead time', value: '2.6 days', delta: '-0.4', note: 'rolling 30d' },
        { label: 'NPS sentiment', value: '68', delta: '+6', note: 'quarter to date' },
    ];

    const pipeline = [
        { name: 'Atlas rebrand', owner: 'L. Ortega', progress: 82, budget: '$48k', status: 'Final polish' },
        { name: 'Aurora launch', owner: 'K. Chen', progress: 64, budget: '$72k', status: 'Media lock' },
        { name: 'Halcyon mobile', owner: 'S. Patel', progress: 41, budget: '$32k', status: 'Prototype' },
        { name: 'Citrine packaging', owner: 'J. Kim', progress: 27, budget: '$21k', status: 'Research' },
    ];

    const signals = [
        { title: 'Realtime traffic', value: '12.4k', delta: '+18%', caption: 'last 24h' },
        { title: 'Retention cohort', value: '54%', delta: '+6%', caption: 'week 8' },
        { title: 'Support pulse', value: 'A-', delta: '-0.2', caption: 'avg score' },
    ];

    const activity = [
        { title: 'Pulse Labs signed off phase 2 visuals', time: '09:12', tone: 'Approved' },
        { title: 'Northwind pitch delivered to Berlin studio', time: '10:47', tone: 'Sent' },
        { title: 'Stencil campaign asset pack exported', time: '12:03', tone: 'Delivered' },
        { title: 'Helio brand film locked with color grade', time: '14:26', tone: 'Final' },
        { title: 'Lumen stack updated for Q2 rollout', time: '16:18', tone: 'Scheduled' },
    ];

    const mapSignals = [
        { name: 'Americas', value: 64, label: 'Strong momentum' },
        { name: 'EMEA', value: 48, label: 'On track' },
        { name: 'APAC', value: 35, label: 'Ramping' },
    ];

    const schedule = [
        { day: 'Mon', title: 'Launch rehearsal', time: '09:00', lead: 'Avery' },
        { day: 'Tue', title: 'Client atelier tour', time: '11:30', lead: 'Mila' },
        { day: 'Wed', title: 'Creative review board', time: '14:00', lead: 'Noah' },
        { day: 'Thu', title: 'Studio broadcast', time: '16:15', lead: 'Imani' },
        { day: 'Fri', title: 'Ops retrospective', time: '10:00', lead: 'Ravi' },
    ];

    const trendBars = [24, 48, 32, 64, 52, 72, 60, 84, 78, 96, 88, 74];
    const carouselImages = [
        'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1471879832106-c7ab9e0cee23?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80',
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex flex-col gap-6 overflow-x-clip rounded-xl p-4 md:p-6">
                <section className="relative overflow-hidden rounded-2xl border border-sidebar-border/70 bg-[radial-gradient(circle_at_top,_rgba(14,116,144,0.18),_transparent_60%),radial-gradient(circle_at_20%_80%,_rgba(240,171,252,0.25),_transparent_45%)] p-6 shadow-sm dark:border-sidebar-border dark:bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.15),_transparent_55%),radial-gradient(circle_at_20%_80%,_rgba(216,180,254,0.18),_transparent_45%)]" data-aos="fade-up">
                    <div className="relative z-10 grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
                        <div className="min-w-0 space-y-4">
                            <div className="flex flex-wrap items-center gap-2">
                                <Badge className="bg-neutral-800 text-white dark:bg-neutral-100 dark:text-neutral-900">Northwind Studio</Badge>
                                <Badge variant="outline" className="border-neutral-300 text-neutral-600 dark:border-neutral-700 dark:text-neutral-300">
                                    Q1 showcase
                                </Badge>
                            </div>
                            <h1 className="text-balance text-3xl font-semibold tracking-tight text-neutral-800 dark:text-neutral-100 md:text-4xl">
                                Creative operations, distilled into a single command view.
                            </h1>
                            <p className="max-w-xl text-sm text-neutral-500 dark:text-neutral-300 md:text-base">
                                Monitor launch cadence, pipeline velocity, and live sentiment. All data below is demo-only and
                                read-only for presentation.
                            </p>
                            <div className="flex flex-wrap gap-3 text-xs text-neutral-500 dark:text-neutral-300">
                                <div className="flex items-center gap-2 rounded-full border border-neutral-200 bg-white/80 px-3 py-1 dark:border-neutral-700 dark:bg-neutral-900/70">
                                    <Gauge className="size-3.5 text-neutral-600 dark:text-neutral-300" />
                                    Velocity index: 92
                                </div>
                                <div className="flex items-center gap-2 rounded-full border border-neutral-200 bg-white/80 px-3 py-1 dark:border-neutral-700 dark:bg-neutral-900/70">
                                    <Users className="size-3.5 text-neutral-600 dark:text-neutral-300" />
                                    26 collaborators active
                                </div>
                                <div className="flex items-center gap-2 rounded-full border border-neutral-200 bg-white/80 px-3 py-1 dark:border-neutral-700 dark:bg-neutral-900/70">
                                    <CalendarClock className="size-3.5 text-neutral-600 dark:text-neutral-300" />
                                    Next release: Feb 12
                                </div>
                            </div>
                        </div>
                        <div className="min-w-0 rounded-xl border border-neutral-200/60 bg-white/80 p-4 shadow-sm backdrop-blur dark:border-neutral-800 dark:bg-neutral-900/70">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">Week 04 snapshot</p>
                                    <p className="text-2xl font-semibold text-neutral-800 dark:text-neutral-100">EUR 412k</p>
                                    <p className="text-xs text-neutral-500 dark:text-neutral-400">Projected creative throughput</p>
                                </div>
                                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-neutral-800 text-white dark:bg-neutral-100 dark:text-neutral-900">
                                    <ArrowUpRight className="size-5" />
                                </div>
                            </div>
                            <div className="mt-4 flex items-end gap-2">
                                {trendBars.map((value, index) => (
                                    <div
                                        key={`trend-${index}`}
                                        className="w-full rounded-full bg-neutral-800/10 dark:bg-neutral-700/60"
                                        style={{ height: `${Math.max(16, value)}px` }}
                                    >
                                        <div
                                            className="h-full rounded-full bg-neutral-800 dark:bg-neutral-100"
                                            style={{ opacity: 0.2 + index / trendBars.length }}
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className="mt-3 flex items-center justify-between text-xs text-neutral-400 dark:text-neutral-500">
                                <span>Mon</span>
                                <span>Wed</span>
                                <span>Fri</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="grid gap-4 md:grid-cols-4" data-aos="fade-up">
                    {kpis.map((kpi) => (
                        <Card key={kpi.label} className="border-sidebar-border/70 shadow-none">
                            <CardHeader>
                                <CardDescription>{kpi.label}</CardDescription>
                                <CardTitle className="text-2xl text-neutral-800 dark:text-neutral-100">{kpi.value}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400">
                                <span className="rounded-full bg-neutral-800 px-2 py-1 text-white dark:bg-neutral-100 dark:text-neutral-900">
                                    {kpi.delta}
                                </span>
                                <span>{kpi.note}</span>
                            </CardContent>
                        </Card>
                    ))}
                </section>

                <section className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]" data-aos="fade-up">
                    <Card className="border-sidebar-border/70">
                        <CardHeader>
                            <CardDescription>Pipeline focus</CardDescription>
                            <CardTitle className="text-xl">Delivery runway</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {pipeline.map((item) => (
                                <div key={item.name} className="rounded-lg border border-neutral-200/70 p-3 dark:border-neutral-800">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm font-semibold text-neutral-800 dark:text-neutral-100">{item.name}</p>
                                            <p className="text-xs text-neutral-500 dark:text-neutral-400">
                                                {item.owner} - {item.status}
                                            </p>
                                        </div>
                                        <Badge variant="outline" className="border-neutral-300 text-neutral-500 dark:border-neutral-700 dark:text-neutral-300">
                                            {item.budget}
                                        </Badge>
                                    </div>
                                    <div className="mt-3 h-2 w-full rounded-full bg-neutral-200 dark:bg-neutral-800">
                                        <div className="h-2 rounded-full bg-neutral-800 dark:bg-neutral-100" style={{ width: `${item.progress}%` }} />
                                    </div>
                                    <div className="mt-2 flex justify-between text-[11px] text-neutral-500 dark:text-neutral-400">
                                        <span>Progress</span>
                                        <span>{item.progress}%</span>
                                    </div>
                                </div>
                            ))}
                        </CardContent>
                    </Card>

                    <Card className="border-sidebar-border/70">
                        <CardHeader>
                            <CardDescription>Live signals</CardDescription>
                            <CardTitle className="text-xl">Momentum board</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {signals.map((signal) => (
                                <div
                                    key={signal.title}
                                    className="flex items-center justify-between rounded-lg border border-neutral-200/70 p-3 dark:border-neutral-800"
                                   
                                >
                                    <div>
                                        <p className="text-sm font-semibold text-neutral-800 dark:text-neutral-100">{signal.title}</p>
                                        <p className="text-xs text-neutral-500 dark:text-neutral-400">{signal.caption}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-lg font-semibold text-neutral-800 dark:text-neutral-100">{signal.value}</p>
                                        <p className="text-xs text-emerald-600 dark:text-emerald-400">{signal.delta}</p>
                                    </div>
                                </div>
                            ))}
                            <div className="rounded-lg border border-neutral-200/70 p-3 dark:border-neutral-800">
                                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
                                    <Globe className="size-4" />
                                    Regional lift
                                </div>
                                <div className="mt-4 space-y-3">
                                    {mapSignals.map((region) => (
                                        <div key={region.name}>
                                            <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400">
                                                <span>{region.name}</span>
                                                <span>{region.label}</span>
                                            </div>
                                            <div className="mt-1 h-2 w-full rounded-full bg-neutral-200 dark:bg-neutral-800">
                                                <div className="h-2 rounded-full bg-neutral-800 dark:bg-neutral-100" style={{ width: `${region.value}%` }} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>
                <section className="grid gap-4" data-aos="fade-up">
                    <Card className="border-sidebar-border/70">
                        <CardHeader>
                            <CardDescription>Studio reel</CardDescription>
                            <CardTitle className="text-xl">Work in motion</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="carousel-mask rounded-xl border border-neutral-200/70 bg-white/60 p-4 dark:border-neutral-800 dark:bg-neutral-900/50">
                                <div className="carousel-track">
                                    {[...carouselImages, ...carouselImages].map((src, index) => (
                                        <div key={`${src}-${index}`} className="carousel-item overflow-hidden rounded-lg border border-neutral-200/70 dark:border-neutral-800">
                                            <img
                                                src={src}
                                                alt={`Studio placeholder ${index + 1}`}
                                                className="h-full w-full object-cover"
                                                loading="lazy"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>
                <section className="grid gap-4 lg:grid-cols-[1fr_1fr]" data-aos="fade-up">
                    <Card className="border-sidebar-border/70">
                        <CardHeader>
                            <CardDescription>Studio feed</CardDescription>
                            <CardTitle className="text-xl">Recent activity</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            {activity.map((item, index) => (
                                <div
                                    key={`${item.title}-${index}`}
                                    className="flex items-center gap-3 rounded-lg border border-neutral-200/70 p-3 dark:border-neutral-800"
                                   
                                >
                                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-800 text-white dark:bg-neutral-100 dark:text-neutral-900">
                                        <Box className="size-4" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm font-medium text-neutral-800 dark:text-neutral-100">{item.title}</p>
                                        <p className="text-xs text-neutral-500 dark:text-neutral-400">
                                            {item.time} - {item.tone}
                                        </p>
                                    </div>
                                    <Badge variant="outline" className="border-neutral-300 text-neutral-500 dark:border-neutral-700 dark:text-neutral-300">
                                        Studio
                                    </Badge>
                                </div>
                            ))}
                        </CardContent>
                    </Card>

                    <Card className="border-sidebar-border/70">
                        <CardHeader>
                            <CardDescription>Cadence</CardDescription>
                            <CardTitle className="text-xl">Weekly studio pulse</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            {schedule.map((item) => (
                                <div
                                    key={item.title}
                                    className="flex items-center justify-between rounded-lg border border-neutral-200/70 p-3 dark:border-neutral-800"
                                   
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-10 w-10 flex-col items-center justify-center rounded-lg bg-neutral-800 text-white dark:bg-neutral-100 dark:text-neutral-900">
                                            <span className="text-xs uppercase">{item.day}</span>
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-neutral-800 dark:text-neutral-100">{item.title}</p>
                                            <p className="text-xs text-neutral-500 dark:text-neutral-400">{item.time}</p>
                                        </div>
                                    </div>
                                    <Badge variant="outline" className="border-neutral-300 text-neutral-500 dark:border-neutral-700 dark:text-neutral-300">
                                        Lead: {item.lead}
                                    </Badge>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </section>

                <section className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]" data-aos="fade-up">
                    <Card className="border-sidebar-border/70">
                        <CardHeader>
                            <CardDescription>Delivery timeline</CardDescription>
                            <CardTitle className="text-xl">Milestones at a glance</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            {[
                                { title: 'Aurora launch kit', date: 'Feb 03', owner: 'K. Chen', status: 'In review' },
                                { title: 'Atlas typography lock', date: 'Feb 06', owner: 'L. Ortega', status: 'Approved' },
                                { title: 'Halcyon beta drop', date: 'Feb 09', owner: 'S. Patel', status: 'Pending' },
                                { title: 'Citrine retail mock', date: 'Feb 12', owner: 'J. Kim', status: 'Scheduled' },
                                { title: 'Helio film release', date: 'Feb 14', owner: 'M. Novak', status: 'Queued' },
                                { title: 'Lumen rollout kit', date: 'Feb 18', owner: 'R. Singh', status: 'Draft' },
                            ].map((item) => (
                                <div
                                    key={`${item.title}-${item.date}`}
                                    className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-neutral-200/70 p-3 dark:border-neutral-800"
                                   
                                >
                                    <div>
                                        <p className="text-sm font-semibold text-neutral-800 dark:text-neutral-100">{item.title}</p>
                                        <p className="text-xs text-neutral-500 dark:text-neutral-400">{item.owner}</p>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
                                        <span className="rounded-full border border-neutral-300 px-2 py-1 dark:border-neutral-700">{item.date}</span>
                                        <span>{item.status}</span>
                                    </div>
                                </div>
                            ))}
                        </CardContent>
                    </Card>

                    <Card className="border-sidebar-border/70">
                        <CardHeader>
                            <CardDescription>Resource stack</CardDescription>
                            <CardTitle className="text-xl">Studio capacity</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {[
                                { label: 'Design pods', value: 78, note: 'On brief' },
                                { label: 'Motion suite', value: 62, note: 'Rendering' },
                                { label: 'Content ops', value: 46, note: 'Scaling' },
                                { label: 'Brand systems', value: 88, note: 'Stable' },
                            ].map((item) => (
                                <div key={item.label}>
                                    <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400">
                                        <span>{item.label}</span>
                                        <span>{item.note}</span>
                                    </div>
                                    <div className="mt-2 h-2 w-full rounded-full bg-neutral-200 dark:bg-neutral-800">
                                        <div className="h-2 rounded-full bg-neutral-800 dark:bg-neutral-100" style={{ width: `${item.value}%` }} />
                                    </div>
                                </div>
                            ))}
                            <div className="rounded-lg border border-neutral-200/70 p-3 dark:border-neutral-800">
                                <p className="text-sm font-semibold text-neutral-800 dark:text-neutral-100">Next hires</p>
                                <p className="text-xs text-neutral-500 dark:text-neutral-400">2x Motion designer, 1x Copy lead</p>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                <section className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]" data-aos="fade-up">
                    <Card className="border-sidebar-border/70">
                        <CardHeader>
                            <CardDescription>Client portfolio</CardDescription>
                            <CardTitle className="text-xl">Active accounts</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            {[
                                { name: 'Northwind', tier: 'Premier', spend: 'EUR 128k' },
                                { name: 'Pulse Labs', tier: 'Growth', spend: 'EUR 84k' },
                                { name: 'Aurora AI', tier: 'Enterprise', spend: 'EUR 96k' },
                                { name: 'Citrine Co', tier: 'Studio', spend: 'EUR 41k' },
                                { name: 'Halcyon', tier: 'Partner', spend: 'EUR 53k' },
                                { name: 'Helio', tier: 'Expansion', spend: 'EUR 67k' },
                            ].map((client) => (
                                <div
                                    key={client.name}
                                    className="flex items-center justify-between rounded-lg border border-neutral-200/70 p-3 dark:border-neutral-800"
                                   
                                >
                                    <div>
                                        <p className="text-sm font-semibold text-neutral-800 dark:text-neutral-100">{client.name}</p>
                                        <p className="text-xs text-neutral-500 dark:text-neutral-400">{client.tier}</p>
                                    </div>
                                    <Badge variant="outline" className="border-neutral-300 text-neutral-500 dark:border-neutral-700 dark:text-neutral-300">
                                        {client.spend}
                                    </Badge>
                                </div>
                            ))}
                        </CardContent>
                    </Card>

                    <Card className="border-sidebar-border/70">
                        <CardHeader>
                            <CardDescription>Ops log</CardDescription>
                            <CardTitle className="text-xl">Studio incidents</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            {[
                                { title: 'Render farm warmup scheduled', time: '07:40', tag: 'Ops' },
                                { title: 'Asset delivery swapped to CDN EU', time: '09:20', tag: 'Infra' },
                                { title: 'Legal review completed for Atlas', time: '11:05', tag: 'Legal' },
                                { title: 'Brief updated for Helio teaser', time: '13:18', tag: 'Creative' },
                                { title: 'Brand kit exported for Aurora', time: '15:42', tag: 'Delivery' },
                                { title: 'Q1 archive sealed for audit', time: '17:10', tag: 'Finance' },
                                { title: 'Localization pack synced', time: '18:22', tag: 'Ops' },
                                { title: 'Final QA sweep started', time: '19:04', tag: 'Quality' },
                            ].map((entry, index) => (
                                <div
                                    key={`${entry.title}-${index}`}
                                    className="flex items-center justify-between rounded-lg border border-neutral-200/70 p-3 dark:border-neutral-800"
                                   
                                >
                                    <div>
                                        <p className="text-sm font-medium text-neutral-800 dark:text-neutral-100">{entry.title}</p>
                                        <p className="text-xs text-neutral-500 dark:text-neutral-400">{entry.time}</p>
                                    </div>
                                    <Badge variant="outline" className="border-neutral-300 text-neutral-500 dark:border-neutral-700 dark:text-neutral-300">
                                        {entry.tag}
                                    </Badge>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </section>

                <section className="grid gap-4" data-aos="fade-up">
                    <Card className="border-sidebar-border/70">
                        <CardHeader>
                            <CardDescription>Archive</CardDescription>
                            <CardTitle className="text-xl">Historical snapshots</CardTitle>
                        </CardHeader>
                        <CardContent className="grid gap-3 md:grid-cols-3">
                            {[
                                { title: 'Q4 Campaign wrap', detail: '108 assets delivered', stamp: 'Dec 2025' },
                                { title: 'Brand system refresh', detail: '42 guidelines updated', stamp: 'Nov 2025' },
                                { title: 'Event pop-up tour', detail: '6 cities activated', stamp: 'Oct 2025' },
                                { title: 'Studio capacity audit', detail: '92% utilization', stamp: 'Sep 2025' },
                                { title: 'Global rollout', detail: '13 markets onboarded', stamp: 'Aug 2025' },
                                { title: 'Pipeline reset', detail: '16 projects re-scoped', stamp: 'Jul 2025' },
                            ].map((item) => (
                                <div key={item.title} className="rounded-lg border border-neutral-200/70 p-4 dark:border-neutral-800">
                                    <p className="text-sm font-semibold text-neutral-800 dark:text-neutral-100">{item.title}</p>
                                    <p className="text-xs text-neutral-500 dark:text-neutral-400">{item.detail}</p>
                                    <p className="mt-3 text-xs uppercase tracking-[0.2em] text-neutral-400">{item.stamp}</p>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </section>
            </div>
        </AppLayout>
    );
}
