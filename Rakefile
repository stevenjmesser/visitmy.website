task :serve do
    puts "Have you updated now.md today?"
    system("bundle exec jekyll serve")
end

task :build do
    system("bundle exec jekyll build")
end

task :webmention do
    system("npx webmention https://visitmy.website/feed.xml --send")
end