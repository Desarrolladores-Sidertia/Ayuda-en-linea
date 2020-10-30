using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using PruebaOnlineHelp.Models;
using Database.src.Model;
using System.Reflection;
using OnlineHelp.DataAccess;

namespace PruebaOnlineHelp
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();

            var dbSection = Configuration.GetSection("ConnectionStrings");
            string connectionString = dbSection["DefaultConnection"];
            var sqlConnectionString = Configuration["PostgreSqlConnectionString"];  
  
            services.AddDbContext<MyDbContext>(options => options.UseNpgsql(connectionString)); 



           /* services.AddDbContext<DbContext, MyDbContext>(options =>
            {
            var dbSection = Configuration.GetSection("ConnectionStrings");
            string connectionString = dbSection["DefaultConnection"];
            options.UseNpgsql(connectionString, options =>
            {

            options.MigrationsAssembly(Assembly.GetExecutingAssembly().FullName);
            });
            //options.UseLoggerFactory(LoggerFactory.Create(builder =>builder.AddConsole())); // esta linea es para depurar las queries
            });*/
            //services.AddScoped<IDataAccessProvider, DataAccessProvider>();
            
            
            /*var connection ="User ID=postgres;Password=123abc.;Host=localhost;Port=5432;Database=myDataBase;Pooling=true;";
            services.AddDbContext<MyDbContext>(options =>
                options.UseNpgsql(Configuration.GetConnectionString(connection)));*/
             /* CORS */
 
            services.AddCors(options => options.AddDefaultPolicy(
                builder => builder.AllowAnyOrigin() ));
 
            /* end CORS */

            services.AddSwaggerGen();
            services.AddScoped<IDataAccessProvider, DataAccessProvider>(); 
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }
            app.UseHttpsRedirection();
            app.UseStaticFiles();

            app.UseRouting();

            app.UseAuthorization();

            /*var context = app.ApplicationServices.GetService<MyDbContext>();
            context.Database.EnsureCreated();*/

            app.CreateDatabase();
            app.UseCors();
            app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1");
                c.RoutePrefix = string.Empty;
            });
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=Home}/{action=Index}/{id?}");
            });
        }
    }
}
