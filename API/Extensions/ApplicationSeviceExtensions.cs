using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Activities;
using Application.Core;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.OpenApi.Models;
using Presistence;
using MediatR;
using Microsoft.EntityFrameworkCore;


namespace API.Extensions
{
    public static class ApplicationSeviceExtensions
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services,
         IConfiguration config)
        {
             
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "API", Version = "v1" });
            });
            services.AddDbContext<DataContext>(opt =>


        {
              opt.UseSqlite(config.GetConnectionString("DefaultConnection"));
        });
            services.AddCors(opt =>

            {
                opt.AddPolicy("CorsPolicy", policy =>
                {
                    policy.AllowAnyMethod().AllowAnyHeader().WithOrigins("http://localhost:3000");
                });
            });
                   services.AddMediatR(typeof(List.Handler).Assembly);
                   services.AddAutoMapper(typeof(MappingProfiles).Assembly);

                        return services;

        }

    }
}