export type SocialLink = { label: string; href: string };

export interface ProfileData {
  name: string;
  title: string;
  email: string;
  avatarUrl?: string; // supports local (public/) or remote URL
  logoUrl?: string;
  showAvatarOnMobile?: boolean;
  heroTech: string;
  social: SocialLink[];
}

const profile: ProfileData = {
  name: 'Bharatsing Parmar',
  title: 'Sr Full Stack Web Expert',
  email: 'bharatsingparmar@gmail.com',
  // Place your headshot at /public/profile.png
  // Or set a remote URL, e.g. 'https://example.com/headshot.png'
  avatarUrl: '/profile.png',
  logoUrl: '/logo.png',
  showAvatarOnMobile: false,
  heroTech: 'ASP.NET • C# • ASP.NET Core • TypeScript • React • Angular • Node.js',
  social: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/bharatsing-parmar/' },
    { label: 'GitHub', href: 'https://github.com/bharatsing-parmar' },
  ],
};

export default profile;