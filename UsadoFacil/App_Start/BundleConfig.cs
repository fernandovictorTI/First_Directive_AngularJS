using System.Web;
using System.Web.Optimization;

namespace UsadoFacil
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/site.css"));

            bundles.Add(new ScriptBundle("~/bundles/Lib_Angular")
                .Include("~/Scripts/angular.min.js")
                .Include("~/Scripts/angular-route.min.js"));

            bundles.Add(new ScriptBundle("~/bundles/App")                
                .Include("~/Scripts/App.js")
                .IncludeDirectory("~/Scripts/Controllers", "*.js")
                .IncludeDirectory("~/Scripts/Directives", "*.js")
                .IncludeDirectory("~/Scripts/Services", "*.js")
                );

            BundleTable.EnableOptimizations = true;
        }
    }
}
