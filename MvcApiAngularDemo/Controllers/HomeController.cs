using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MvcApiAngularDemo.Controllers
{
    public class HtmlResult : FilePathResult
    {
        public HtmlResult(string path)
            : base(path, "text/html") { }
    }

    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public HtmlResult StaticIndex()
        {
            return new HtmlResult("~/App/dist/index.htmlapp/index.html");
        }
    }
}