import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Galerie',
        href: '/gallery',
    },
];

    const galleryItems = [
        {
            title: 'Dune Line',
            category: 'Landscape',
            src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
            className: 'col-span-12 md:col-span-7 md:row-span-4',
        },
        {
            title: 'Night Transit',
            category: 'City',
            src: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80',
            className: 'col-span-12 md:col-span-5 md:row-span-2',
        },
        {
            title: 'Quiet Desk',
            category: 'Workspace',
            src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
            className: 'col-span-12 md:col-span-5 md:row-span-2',
        },
        {
            title: 'Mist Valley',
            category: 'Landscape',
            src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80',
            className: 'col-span-12 md:col-span-6 md:row-span-2',
        },
        {
            title: 'Summit Glow',
            category: 'Landscape',
            src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80',
            className: 'col-span-12 md:col-span-6 md:row-span-3',
        },
        {
            title: 'Soft Macro',
            category: 'Detail',
            src: 'https://images.unsplash.com/photo-1471879832106-c7ab9e0cee23?auto=format&fit=crop&w=1200&q=80',
            className: 'col-span-12 md:col-span-4 md:row-span-3',
        },
        {
            title: 'Amber Ridge',
            category: 'Landscape',
            src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80',
            className: 'col-span-12 md:col-span-4 md:row-span-2',
        },
        {
            title: 'Late Lines',
            category: 'Street',
            src: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80',
            className: 'col-span-12 md:col-span-4 md:row-span-2',
        },
        {
            title: 'Glass Bloom',
            category: 'Detail',
            src: 'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&w=1200&q=80',
            className: 'col-span-12 md:col-span-6 md:row-span-2',
        },
        {
            title: 'Highlands',
            category: 'Travel',
            src: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80',
            className: 'col-span-12 md:col-span-6 md:row-span-2',
        },
        {
            title: 'Copper Shore',
            category: 'Coast',
            src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80',
            className: 'col-span-12 md:col-span-3 md:row-span-2',
        },
        {
            title: 'Open Field',
            category: 'Landscape',
            src: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80',
            className: 'col-span-12 md:col-span-3 md:row-span-2',
        },
        {
            title: 'Sun Drift',
            category: 'Light',
            src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80',
            className: 'col-span-12 md:col-span-3 md:row-span-2',
        },
        {
            title: 'Quartz Pass',
            category: 'Landscape',
            src: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80',
            className: 'col-span-12 md:col-span-3 md:row-span-2',
        },
        {
            title: 'Calm Tracks',
            category: 'City',
            src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80',
            className: 'col-span-12 md:col-span-4 md:row-span-2',
        },
        {
            title: 'Afterglow',
            category: 'Sky',
            src: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80',
            className: 'col-span-12 md:col-span-4 md:row-span-2',
        },
        {
            title: 'Quiet Tide',
            category: 'Sea',
            src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
            className: 'col-span-12 md:col-span-4 md:row-span-2',
        },
        {
            title: 'Evergreen',
            category: 'Forest',
            src: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80',
            className: 'col-span-12 md:col-span-6 md:row-span-2',
        },
        {
            title: 'Cloud Study',
            category: 'Atmosphere',
            src: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80',
            className: 'col-span-12 md:col-span-6 md:row-span-2',
        },
    ];

export default function Gallery() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Galerie" />
            <div className="flex flex-col gap-6 overflow-x-clip rounded-xl p-4 md:p-6">
                <section className="rounded-2xl border border-sidebar-border/70 bg-[radial-gradient(circle_at_top,_rgba(14,116,144,0.12),_transparent_60%),radial-gradient(circle_at_20%_80%,_rgba(240,171,252,0.18),_transparent_45%)] p-6 shadow-sm dark:border-sidebar-border dark:bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.12),_transparent_55%),radial-gradient(circle_at_20%_80%,_rgba(216,180,254,0.15),_transparent_45%)]">
                    <div className="max-w-2xl space-y-3">
                        <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 dark:text-neutral-400">Galerie</p>
                        <h1 className="text-balance text-3xl font-semibold tracking-tight text-neutral-800 dark:text-neutral-100 md:text-4xl">
                            A curated wall of creative moments.
                        </h1>
                        <p className="text-sm text-neutral-500 dark:text-neutral-300 md:text-base">
                            A mix of large hero frames and compact detail shots. Scroll to explore the moodboard and
                            tap into texture, light, and composition.
                        </p>
                    </div>
                </section>

                <section className="grid gap-4 md:grid-cols-12 md:auto-rows-[110px]">
                    {galleryItems.map((item, index) => (
                        <div
                            key={`${item.title}-${item.category}`}
                            className={`group relative overflow-hidden rounded-2xl border border-neutral-200/70 bg-neutral-100 shadow-sm transition-transform duration-300 ease-out dark:border-neutral-800 dark:bg-neutral-900 aspect-[4/3] md:aspect-auto ${item.className}`}
                            data-aos="fade-up"
                        >
                            <img
                                src={item.src}
                                alt={`${item.title} - ${item.category}`}
                                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90" />
                            <div className="absolute bottom-4 left-4 right-4">
                                <p className="text-xs uppercase tracking-[0.2em] text-white/70">{item.category}</p>
                                <p className="text-lg font-semibold text-white">{item.title}</p>
                            </div>
                        </div>
                    ))}
                </section>
            </div>
        </AppLayout>
    );
}
