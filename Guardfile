# A sample Guardfile
# More info at https://github.com/guard/guard#readme

# Compass will read from the main config.rb file
guard :compass

# This will concatenate the javascript files specified in :files to public/assets/js/all.js
guard :concat, type: "js", files: %w(main), input_dir: "public/assets/js", output: "public/assets/js/all"

# This will minify the combined javascript file
guard 'uglify', :destination_file => "public/assets/js/all.js" do
  watch ('public/assets/js/all.js')
end

# Live reload
guard 'livereload' do
  watch(%r{.+\.(css|html|js)$})
end