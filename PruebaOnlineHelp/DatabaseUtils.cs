/*using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using System;
using System.Linq;
namespace Database.src.Model
{
 public static class DatabaseUtils
 {
 public static IApplicationBuilder CreateDatabase (this IApplicationBuilder host)
 {
 using (var scope = host.ApplicationServices.CreateScope())
 {
 using (var context =
scope.ServiceProvider.GetRequiredService<DbContext>())
 {
 context.Database.EnsureCreated();
 }
 }
 return host;
 }
 }
}*/
