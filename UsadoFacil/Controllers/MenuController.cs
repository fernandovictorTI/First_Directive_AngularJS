using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using UsadoFacil.Models;

namespace UsadoFacil.Controllers
{
    public class MenuController : Controller
    {   
        public IEnumerable<MenuModel> Menus 
        {
            get 
            {
                var retorno = new List<MenuModel>();
                retorno.Add(new MenuModel { Id = 1, Nome = "Carro", Link = "/#/Carro" });
                retorno.Add(new MenuModel { Id = 2, Nome = "Usuario", Link = "/#/Usuario" });
                return retorno;
            } 
        }
        
        public ActionResult GetMenu()
        {
            return Json(Menus, JsonRequestBehavior.AllowGet);
        }
	}
}