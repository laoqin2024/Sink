export default defineAppConfig({
  title: 'Sink',
  email: 'sink.cool@miantiao.me',
  github: 'https://github.com/laoqin2024/Sink',
  twitter: 'https://sink.cool/kai',
  telegram: 'https://sink.cool/telegram',
  mastodon: 'https://sink.cool/mastodon',
  blog: 'https://sink.cool/blog',
  description: 'Sink是一个简单的/快速的/安全的链接缩短器，100%运行在 Cloudflare 上。',
  image: 'https://sink.cool/banner.png',
  previewTTL: 300, // 5 minutes
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
