using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(UsadoFacil.Startup))]
namespace UsadoFacil
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
