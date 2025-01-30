import React from 'react';

export default function AboutPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h1 
            className="text-4xl font-bold text-center text-gray-800 mb-12"
            tabIndex={0}
          >
            ABOUT US
          </h1>

          {/* Company Profile Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 
              className="text-2xl font-semibold text-gray-800 mb-6"
              tabIndex={0}
            >
              Who We Are - TRB Oilfield Services Company Profile
            </h2>
            <div className="prose prose-lg text-gray-600 max-w-none">
              <p className="mb-6">
                TRB Oilfield Services, Inc. is a California based company offering comprehensive high quality services to the oilfield and industrial energy sectors. TRB oilfield services include full line oil and geothermal well cementing services, coiled tubing well intervention services, high pressure pumping services, and well plug and abandonment; services. TRB Oilfield Services is based in Bakersfield, California and was founded in 2004 to serve the Oil and Gas Industry in the San Joaquin Valley and greater California.
              </p>
              <p className="mb-6">
                In 2010, TRB Oilfield Services added TRB Tools & Sales to provide cased hole completion and work-over tools to its portfolio of services provided. TRB Tools & Sales offer a full line of cased hole completion products for both complex and conventional applications, as well as multiple product lines to help maximize efficiency. We take pride in our exceptional customer service and reliability with an emphasis on safety and performance.
              </p>
              <p className="mb-8">
                TRB Oilfield Services currently works with many of the independent operators and majors operators on oil well sites throughout California as well as areas of Nevada, Utah, Texas, and New Mexico.
              </p>
            </div>

            {/* Service Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              <div className="relative h-64 overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="https://qxpzubxgahiruuxnzlev.supabase.co/storage/v1/object/sign/TRB-assets/trb_trucks_op.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJUUkItYXNzZXRzL3RyYl90cnVja3Nfb3AuanBnIiwiaWF0IjoxNzM4MjE1OTE2LCJleHAiOjE4OTU4OTU5MTZ9.BvMVDKQYJGWNaam9Wdq7CJJUlPjEGC-KZhim1R6QzdI" 
                  alt="TRB Service Truck"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="relative h-64 overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="https://qxpzubxgahiruuxnzlev.supabase.co/storage/v1/object/sign/TRB-assets/trb_op_op.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJUUkItYXNzZXRzL3RyYl9vcF9vcC5qcGciLCJpYXQiOjE3MzgyMTU4MzksImV4cCI6MTg5NTg5NTgzOX0._roYg7V2D5FsFIUJovvdlR63luBxgWLNXhp3sC3K4CI" 
                  alt="Equipment Operation"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Working With TRB Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 
              className="text-2xl font-semibold text-gray-800 mb-6"
              tabIndex={0}
            >
              Working With TRB Oilfield Services
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div className="prose prose-lg text-gray-600">
                <p className="mb-4">
                  TRB Oilfield Services is owner managed and operated, and as a core company has over a 100+ employees and a core experience level combined of 30+ years in all of our services we provide.
                </p>
                <p className="mb-4">
                  TRB is currently hiring experienced candidates and hiring and training inexperienced candidates that are motivated to learn and have a good work ethic. TRB is an equal opportunity employer. See Employment tab for details.
                </p>
                <p>
                  TRB is committed to performing all work in compliance with Environmental, Health, and Safety (EHS) standards, and is here to help with any of your project needs!
                </p>
              </div>
              <div className="relative h-80 overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="https://qxpzubxgahiruuxnzlev.supabase.co/storage/v1/object/sign/TRB-assets/trb_overview_op.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJUUkItYXNzZXRzL3RyYl9vdmVydmlld19vcC5qcGciLCJpYXQiOjE3MzgyMTU4NzQsImV4cCI6MTg5NTg5NTg3NH0.C2wZcUPbsgIJQB4Z3QIcKEwaiYhLEmfhE-yt97XWCXc" 
                  alt="TRB Facility Aerial View"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Markets We Serve Section */}
          <div className="max-w-4xl mx-auto">
            <h2 
              className="text-2xl font-semibold text-gray-800 mb-6"
              tabIndex={0}
            >
              Markets We Serve
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div className="prose prose-lg text-gray-600">
                <p>
                  TRB Oilfield Services is uniquely positioned to offer industry leading oilfield services to Oil & Gas and Geothermal operators in the California energy market. TRB provides coiled tubing, well cementing, high pressure pumping, cased hole tools, and well plug & abandonment services using high quality, well maintained equipment and experienced, professional management and personnel.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-48 overflow-hidden rounded-lg shadow-lg">
                  <img 
                    src="https://qxpzubxgahiruuxnzlev.supabase.co/storage/v1/object/sign/TRB-assets/trb_tanks_op.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJUUkItYXNzZXRzL3RyYl90YW5rc19vcC5qcGciLCJpYXQiOjE3MzgyMTU4OTcsImV4cCI6MTg5NTg5NTg5N30.b_NScYvPQzinlIR7-LujRAi5FCc7NFkVyS7f8_5G_TQ" 
                    alt="Storage Tanks"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="relative h-48 overflow-hidden rounded-lg shadow-lg">
                  <img 
                    src="https://qxpzubxgahiruuxnzlev.supabase.co/storage/v1/object/sign/TRB-assets/trb_equipment_op.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJUUkItYXNzZXRzL3RyYl9lcXVpcG1lbnRfb3AuanBnIiwiaWF0IjoxNzM4MjE1ODA0LCJleHAiOjE4OTU4OTU4MDR9.nxfdKBRWNpBoKj6AwGFKIJ9my0MxEITpseJTqjX--k8" 
                    alt="Field Equipment"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
