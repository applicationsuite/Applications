import { FooterDemo } from "../Footer/footer";
import "../cloud/cloud.css";
import { Link } from "react-router-dom";
import { NavBar } from "../navbar/navbar";

export function CloudDemo() {
  return (
    <div className="container-fluid">
      <NavBar />
      <div className="banner">
        <img src="banner.png" width="100%" height="300" />
        <div className="row">
          <div className="banner-text  col-5">
            <h2>Your Managed Cloud Hosting Partner</h2>
            An Organization that facilitates choice, simplicity and performance.
            All this is backed by caring expert support so that you stay focused
            on what you do best, win as an individual and succeed as a business.
          </div>
          <div className="col-1 btn banner-text-home">
            <Link to="/">HOME</Link>/CLOUD
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-5">
        <h3>Experirnce the Next Generation Cloud Hosting</h3>
      </div>
      <div>
        <div className="container ">
          <div className=" mt-5 row">
            <div className="col-6">
              <h3 className="me-5">
                Focus on Your Application in
                <br /> AWS Not Your AWS Infrastructure
              </h3>
              AWS is as complex as it is powerful. Choosing the right instances
              and tools for your applications, designing redundant and secure
              environments, managing the migration, optimizing deployments - it
              requires expertise and a whole lot of time.
            </div>
            <div className="col-6">
              <h3 className="ms-5 text-danger">Amazon AWS Management</h3>
              Amazon Web Services (AWS) - the secure cloud services platform
              helps businesses scale and grow by building sophisticated
              applications with increased flexibility, scalability and
              reliability. AWS offers businesses the capabilities to scale and
              grow faster with on-demand instances, improved application
              development, and storage options to meet growing needs. Start
              configuring your custom AWS solution from the wide range of plans
              on offer.
            </div>
          </div>
          <div className="row">
            <div className="col-6 mt-3 absolute">
              <img src="amazonewebservice.png" width="100%" />
            </div>
            <div className="col-6 mt-5">
              <h3>Exciting features of AWS management by MahiconCloud Team</h3>
              <ul>
                <li>AWS Accounts Management And Auditing</li>
                <li>Cloud Access Control For Complete Security</li>
                <li>Cloud Analytics And Activity Logging</li>
                <li>AWS Cloud Management</li>
                <li>AWS Migration Services</li>
                <li>Database Management Services</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container ">
          <div className=" mt-5 row">
            <div className="col-6">
              <h3 className="me-5 text-danger">Microsoft Azure Management</h3>
              Managed Microsoft Azure by SingleHop not only keeps your team
              focused on major business objectives, it lets you retain control -
              just as if it were managed in house. Leveraging our powerful cloud
              automation platform and our dedicated team of Microsoft Certified
              Engineers, we deliver superior performance for your Azure
              workloads. Maximize all that Azure and Microsoft Cloud has to
              offer with a solution built and priced specifically for your
              business size.
            </div>
            <div className="col-6">
              <h3>Experience Azure - the globally trusted Cloud platform</h3>
              Get the freedom to build apps and deploy them the way you wantWith
              a variety of tools, applications and development frameworks
              available across globally spread datacenter networks, build any
              application suiting your business needs and experience powerful
              scalability and flexibility of cloud.
            </div>
          </div>
          <div className="row">
            <div className="col-6 mt-5">
              <h3>
                Exciting features of Microsoft Azure management by MahiconCloud
                Team
              </h3>
              <ul>
                <li>Azure Accounts Management And Auditing</li>
                <li>Cloud Access Control For Complete Security</li>
                <li>Cloud Analytics And Activity Logging</li>
                <li>Azure Cloud Management</li>
                <li>Azure Cloud Management</li>
                <li>Database Management Services</li>
              </ul>
            </div>
            <div className="col-6 mt-5">
              <img src="amazone.png" width="100%" />
            </div>
          </div>
        </div>
        <div className="container ">
          <div className=" mt-5 row">
            <div className="col-6">
              <h3 className="me-5 text-danger">DigitalOcean Cloud</h3>
              Refine your DigitalOcean hosting experience with even more
              simplicity. MahiconClouds Team Empowering businesses with easy
              DigitalOcean server and app management for maximum efficiency.
            </div>
            <div className="col-6">
              <h3>Managed Google Cloud Platform</h3>
              Get the freedom to build apps and deploy them the way you wantWith
              a variety of tools, applications and development frameworks
              available across globally spread datacenter networks, build any
              application suiting your business needs and experience powerful
              scalability and flexibility of DigitalOcean Cloud.
            </div>
          </div>
          <div className="row">
            <div className="col-6 mt-5">
              <h3>
                Exciting features of DigitalOcean Cloud management by
                MahiconClouds Team
              </h3>
              <ul>
                <li>DigitalOcean Cloud Accounts Management And Auditing</li>
                <li>DigitalOcean Cloud Access Control For Complete Security</li>
                <li>DigitalOcean Cloud Analytics And Activity Logging</li>
                <li>DigitalOcean Cloud Management</li>
                <li>DigitalOcean Cloud Migration Services</li>
                <li>Database Management Services</li>
              </ul>
            </div>
            <div className="col-6 mt-5">
              <img src="google.png" width="100%" />
            </div>
          </div>
        </div>{" "}
        <div className="container ">
          <div className=" mt-5 row">
            <div className="col-6">
              <h3 className="me-5 text-danger">Microsoft Azure Management</h3>
              Managed Microsoft Azure by SingleHop not only keeps your team
              focused on major business objectives, it lets you retain control -
              just as if it were managed in house. Leveraging our powerful cloud
              automation platform and our dedicated team of Microsoft Certified
              Engineers, we deliver superior performance for your Azure
              workloads. Maximize all that Azure and Microsoft Cloud has to
              offer with a solution built and priced specifically for your
              business size.
            </div>
            <div className="col-6">
              <h3>Experience Azure - the globally trusted Cloud platform</h3>
              Get the freedom to build apps and deploy them the way you wantWith
              a variety of tools, applications and development frameworks
              available across globally spread datacenter networks, build any
              application suiting your business needs and experience powerful
              scalability and flexibility of cloud.
            </div>
          </div>
          <div className="row">
            <div className="col-6 mt-5">
              <h3>
                Exciting features of Microsoft Azure management by MahiconCloud
                Team
              </h3>
              <ul>
                <li>Azure Accounts Management And Auditing</li>
                <li>Cloud Access Control For Complete Security</li>
                <li>Cloud Analytics And Activity Logging</li>
                <li>Azure Cloud Management</li>
                <li>Azure Cloud Management</li>
                <li>Database Management Services</li>
              </ul>
            </div>
            <div className="col-6 mt-5">
              <img src="digitalocean.png" width="100%" />
            </div>
          </div>
        </div>
        <div className="container ">
          <div className="row">
            <div className="col-6 mt-5">
              <img src="digitalocean.png" width="100%" />
            </div>
            <div className="col-6 mt-5">
              <h3 className="text-danger">Why Choose Us</h3>
              <ul className="h5">
                <li>Strong Technical Expertise</li>
                <li>Diverse domain competency</li>
                <li>Reliable and consistent communication</li>
                <li>Continuous upgrade to new and emerging technologies</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <img src="world.png" />
        </div>
      </div>
      <FooterDemo />
    </div>
  );
}
