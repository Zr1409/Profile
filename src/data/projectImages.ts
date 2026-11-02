import type { ProjectScreenshot } from '../types/portfolio';

// Original captures only. Source details are in public/images/projects/sources.json.
export const PROJECT_IMAGES: Record<string, ProjectScreenshot[]> = {
  minlish: [
    { src: '/images/projects/minlish/home.webp', previewSrc: '/images/projects/minlish/home-840.webp', title: 'Homepage', alt: 'MinLish live homepage with its vocabulary learning introduction and flashcard', width: 1440, height: 1000, source: 'Live website capture' },
    { src: '/images/projects/minlish/features.webp', previewSrc: '/images/projects/minlish/features-840.webp', title: 'Learning features', alt: 'Learning features on the live MinLish website', width: 1440, height: 1000, source: 'Live website capture' },
    { src: '/images/projects/minlish/study-workflow.webp', previewSrc: '/images/projects/minlish/study-workflow-840.webp', title: 'Study workflow', alt: 'MinLish three-step study workflow covering vocabulary sets, spaced repetition and progress tracking', width: 1440, height: 1000, source: 'Live website capture' },
  ],
  talenthub: [
    { src: '/images/projects/talenthub/home.webp', previewSrc: '/images/projects/talenthub/home-840.webp', title: 'Homepage', alt: 'Original TalentHub homepage introducing its freelancer and employer platform', width: 1440, height: 1000, source: 'Original frontend capture' },
    { src: '/images/projects/talenthub/about.webp', previewSrc: '/images/projects/talenthub/about-840.webp', title: 'About the platform', alt: 'About page rendered by the original TalentHub frontend', width: 1440, height: 1000, source: 'Original frontend capture' },
    { src: '/images/projects/talenthub/platform-features.webp', previewSrc: '/images/projects/talenthub/platform-features-840.webp', title: 'Platform features', alt: 'Original TalentHub platform features and invitation to connect freelancers with employers', width: 1440, height: 1000, source: 'Original frontend capture' },
  ],
  booknest: [
    { src: '/images/projects/booknest/home.webp', previewSrc: '/images/projects/booknest/home-840.webp', title: 'Storefront', alt: 'BookNest storefront with book categories, a promotional banner and best-selling books', width: 1886, height: 872, source: 'Project report screenshot' },
    { src: '/images/projects/booknest/details.webp', previewSrc: '/images/projects/booknest/details-840.webp', title: 'Book details', alt: 'BookNest book detail page with the original cover, price and add-to-cart action', width: 1893, height: 867, source: 'Project report screenshot' },
    { src: '/images/projects/booknest/cart.webp', previewSrc: '/images/projects/booknest/cart-840.webp', title: 'Shopping cart', alt: 'Original BookNest shopping cart showing a book, quantity controls, order totals and checkout', width: 1887, height: 855, source: 'Project report screenshot' },
  ],
};
