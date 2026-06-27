import React from "react";
import "./GalleryPage.css";
import VideoSection from "../../components/Video/VideoSection";

const latestPhotos = [
  "https://scontent.fnbo18-1.fna.fbcdn.net/v/t39.30808-6/727058922_1331724215773062_6040257494474800442_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1365&ctp=s2048x1365&_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHclFouIaRrFxnxKWSiU91R4VKoAOfPUsbhUqgA589SxuxbUjDRkeMXE452n9IYef-JLHcjKP0Ownaot9GE1_mD&_nc_ohc=We-tAmIfv3YQ7kNvwFV-46L&_nc_oc=AdonfTTXyMqb2qxYjZxrd0A5K6AHxLXJ0XmzqdEHjcFpV36iARgmSCdqQfDdwlT6UHU&_nc_zt=23&_nc_ht=scontent.fnbo18-1.fna&_nc_gid=GmIsUGDHnh9BdqXx7hPICw&_nc_ss=7b2a8&oh=00_Af_PhNcrQB4zR44nwXJe8Vy4ICliqQhvYNQJSoY3HUtJmA&oe=6A4598B4",
  "https://scontent.fnbo18-1.fna.fbcdn.net/v/t39.30808-6/728971707_1331725219106295_7700042677659815546_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1365&ctp=s2048x1365&_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFbj_VZGTw23E3T6OUNbeuT1zX_i9Z9BPHXNf-L1n0E8dCsjrF-OkBHP4au8vT1kXyAEriCp2vfMIaETkJFMRQW&_nc_ohc=F0nDk69rYcEQ7kNvwHtKx28&_nc_oc=Adq7LLig2pMxeX0_uwFUiUACRw3bfU5pXGo25PV4FJJHAZ6qHRH4lm256l2HiIB8uuY&_nc_zt=23&_nc_ht=scontent.fnbo18-1.fna&_nc_gid=XVi6WELyVVlqk6s9tPcJyg&_nc_ss=7b2a8&oh=00_Af8EGmvwV9j4ovQfklRmYXM-CNo_uL2o1SexV4aEmLLmdg&oe=6A459C20",
  "https://scontent.fnbo18-1.fna.fbcdn.net/v/t39.30808-6/729220656_1331723802439770_1292355914672979710_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1365&ctp=s2048x1365&_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGtJ9OISDsMvW7WiF1P6thMTUyZYV6yL8pNTJlhXrIvyoaVux954YRwsBZQ10btQDhK4kZXMMAqmSFF0snf04GX&_nc_ohc=RnhH4YGz5K0Q7kNvwHUXYXR&_nc_oc=AdpwrPAXd3-QU4haewKI3rjgkGMX-X0txFHoenkxS4fzf6_GS0TFlqPlsQ1r1XH1TwE&_nc_zt=23&_nc_ht=scontent.fnbo18-1.fna&_nc_gid=1SYMDzNde-bzOX-sVDF9AA&_nc_ss=7b2a8&oh=00_Af8y5GMi_Jfc4H2zZT9GJI6ezelXWPxBpHwMt68hBMNTjw&oe=6A45C3A9",
  "https://scontent.fnbo18-1.fna.fbcdn.net/v/t39.30808-6/727551159_1331722679106549_3439392968817316339_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1365&ctp=s2048x1365&_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeH5XDdZ4Bajt3IdIJlhU8CcQWTBmBXsVf9BZMGYFexV_wNMb5AZ2i6SPzMuo51168_iwn4MmnLox57TuRG69O3E&_nc_ohc=qk76FQBTHjsQ7kNvwGPLwm9&_nc_oc=Adr3ywGYa0yJXT8bn1DXpVehfWSNQPBXU0xw67d0ZU2L_QFrhqKYgg9gy9NT-1ZbasM&_nc_zt=23&_nc_ht=scontent.fnbo18-1.fna&_nc_gid=yAQX9Ky9xmS-XLMMYoIteA&_nc_ss=7b2a8&oh=00_Af_axssS1cx4lgWrlpBuI3cw7RC3-nM1i7xaBF8lX-6DHg&oe=6A45B7B1",
  "https://scontent.fnbo18-1.fna.fbcdn.net/v/t39.30808-6/728245102_1331717445773739_1065882005978221272_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1365&ctp=s2048x1365&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHGYQbSX4oBFGyxME1uPXGjfPipexV080B8-Kl7FXTzQHjmvCWncxBFD1Y4HSWfxXaecBxOQO3lyQ0v9FV_L3QX&_nc_ohc=XQBQoc2tL58Q7kNvwF0X9T1&_nc_oc=Adp8qnlKeSanvS-3KT5jn1roP0hLDJ-YUoWsPssn6XUeyBvqSlBjJxjXIGiREGo9jZQ&_nc_zt=23&_nc_ht=scontent.fnbo18-1.fna&_nc_gid=JVvfsNkNJ7wir8nBOxpLHw&_nc_ss=7b2a8&oh=00_Af9ZNgNJFSk-5jzKJzXsLMkxBAkJ0-SbUXvj5_-3XxOguA&oe=6A45B304",
  "https://scontent.fnbo18-1.fna.fbcdn.net/v/t39.30808-6/728315289_1331722802439870_618066181711601652_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1365&ctp=s2048x1365&_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeE6-aBGFR422mdMjCbKXUGqIJkbSC9TwPAgmRtIL1PA8L32ug7lMHgCuFjhCfqtKHRvNqnbxj-vlpwQcfOPSByE&_nc_ohc=DjfhNgOXGX8Q7kNvwGm4blV&_nc_oc=Ado6D8uzbtH3ralEL_cCOiFyr8xgu58rPeMV7BJ9nsO0K3zqoVd_sDG2H2I97R-QzCQ&_nc_zt=23&_nc_ht=scontent.fnbo18-1.fna&_nc_gid=KidDaVyhfqvKyJVqw1rSVg&_nc_ss=7b2a8&oh=00_Af9mryaWDOyiTMWWE6ep4-Od3iqF1-7nDKTi9jm_uytx4w&oe=6A45BD94",
  "https://scontent.fnbo18-1.fna.fbcdn.net/v/t39.30808-6/727323171_1331725642439586_5543535894406687193_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1365&ctp=s2048x1365&_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGjpjPoLOfu3m1zNT2CDCTt3yAhCZSuQ5vfICEJlK5Dm9k8rFIsd_gbBn4f5zTz0iZMEFsa_3iZ5ocxIv9pupha&_nc_ohc=jf5-H0L6-YgQ7kNvwGa5xRC&_nc_oc=AdpslQvNPe98gGTkbbzn8lnpuz0v-VZHtlCcJZbZeqX-mDzvWZ8bpJAR2GZ4DIzK_LI&_nc_zt=23&_nc_ht=scontent.fnbo18-1.fna&_nc_gid=qfl2uE7j6nxdZ7__FxBC7w&_nc_ss=7b2a8&oh=00_Af-Q1Yp_ffWphF7eeDLJuf12q5CE9og21F8TdbJQrOihGQ&oe=6A45C8B8",
  "https://scontent.fnbo18-1.fna.fbcdn.net/v/t39.30808-6/728286521_1331724525773031_768227421556704372_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1365&ctp=s2048x1365&_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFVcWs5SVaOY9K567HupL7hj5OsB-TQay-Pk6wH5NBrLxQnHmhMs7pbm1nATyPxlg4SaaHVv65KXI5-mjwU4qYh&_nc_ohc=gdROFduIvpsQ7kNvwFz6WqA&_nc_oc=Adoq_IY9c0d3JD5Y_YP6TbAgxe_2_2vFKpaoGflSPx8a5OHUj0uOs2hpc7DJqT0O9XQ&_nc_zt=23&_nc_ht=scontent.fnbo18-1.fna&_nc_gid=ubD4mHzYYSNYi4rDvQ6mjA&_nc_ss=7b2a8&oh=00_Af9Folm85SzxxyJqQGSAlT7Yn_eO-CrZevnXF63qNqK9ng&oe=6A45C182",
  "https://scontent.fnbo18-1.fna.fbcdn.net/v/t39.30808-6/726427622_1331725232439627_6859671941166835502_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1365&ctp=s2048x1365&_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHs3JfuKTO8cyDCfD-ALht4KOwx1USgjvMo7DHVRKCO83InQvvyfPeO1Y-ij0yGAguEbG9gCFTglt_A3L0dizir&_nc_ohc=19DbDgodKXsQ7kNvwHqg1HT&_nc_oc=Adqqj2BGP4gMTBEG5PhbuV6CROAM7v_DIvw3EwDzGxAKOKWdkWsmsz7kRihlSdaPhf8&_nc_zt=23&_nc_ht=scontent.fnbo18-1.fna&_nc_gid=SJMSh9kcaTybbOQSq6FKWA&_nc_ss=7b2a8&oh=00_Af98XOM5SXXmkF_4x-vc_GS1kWpizXDsNVHg7FHS-FVz6Q&oe=6A45C764",
  "https://scontent.fnbo18-1.fna.fbcdn.net/v/t39.30808-6/727834652_1331723169106500_6160298693310584375_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1365&ctp=s2048x1365&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFLpBUmjWcLidSKSaeTvY1uzqZBlT_m8cfOpkGVP-bxxyft6g4jOyfnvzTUouPTd4VV7IxuQEs0cS5ZhryqyQWW&_nc_ohc=SbpSVzLw514Q7kNvwFgsuHh&_nc_oc=Adp8DnWE6cBTsJoMPDPMHZDGeo7FZ7bZF0LNlaQxFHJSIhAfQjUjz3WgwHwH4byOal4&_nc_zt=23&_nc_ht=scontent.fnbo18-1.fna&_nc_gid=jDTfCtbLZxt0g5CnAP1RZA&_nc_ss=7b2a8&oh=00_Af_s6JZmH9xqhDUnkNKbE1rqH3ZDD67KwNAMeR_xSsxqgA&oe=6A45C933",
  "https://scontent.fnbo18-1.fna.fbcdn.net/v/t39.30808-6/727542824_1331726895772794_6086019264835605928_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1365&ctp=s2048x1365&_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEBaVP-oqErf1ZcG7EEK2Mv3T2OEtLa8fPdPY4S0trx85mc4DnIQq7AyNzsl_WCa0_nThXpsYuUbkib2iJa41ja&_nc_ohc=7EMa6DClRkkQ7kNvwEVtsK_&_nc_oc=AdpaTrQq7Azo9Od7yC3YWR9a1zKyvQllf-4B0wqEsy5VztGSX0LovWBqUz_Aszwp5Ew&_nc_zt=23&_nc_ht=scontent.fnbo18-1.fna&_nc_gid=5HvQDDJW3NRIe6SNIDfZ1A&_nc_ss=7b2a8&oh=00_Af9-yvNSHsdvs4HHobfxG3GedWsRQvMNKKm-fy6-v-_5AQ&oe=6A45ADE3",
  "https://scontent.fnbo18-1.fna.fbcdn.net/v/t39.30808-6/728665000_1331727419106075_4656501914795319504_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1365&ctp=s2048x1365&_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEX8lBZPzwMTuzj0zrQ0vpwJcLQ2nXLkx0lwtDadcuTHXO-FNNG8oXGs62QtPD_ovtLCMsUzPZh2F2BT0z4pzxH&_nc_ohc=dZZ9eMcFqoMQ7kNvwE0R-Y2&_nc_oc=AdpCTQHGKP2liPG6i0jhOHl6JlcnMGfo1ArNqnvHEgdF93Rvx53nUcby5_dMkuSxyoo&_nc_zt=23&_nc_ht=scontent.fnbo18-1.fna&_nc_gid=ug0AOCp_ssHjE_U9E8D-9Q&_nc_ss=7b2a8&oh=00_Af-B5fXU5CG90wNFFvK9HeD8nAF3jDjkWNxrK6ItDXOZFQ&oe=6A45C1CB"  

];

const celebrationPhotos = [
  "https://YOUR_BUCKET.s3.amazonaws.com/70years1.jpg",
  "https://YOUR_BUCKET.s3.amazonaws.com/70years2.jpg",
  "https://YOUR_BUCKET.s3.amazonaws.com/70years3.jpg",
];

const generalGallery = [
  "https://YOUR_BUCKET.s3.amazonaws.com/general1.jpg",
  "https://YOUR_BUCKET.s3.amazonaws.com/general2.jpg",
  "https://YOUR_BUCKET.s3.amazonaws.com/general3.jpg",
];

function GallerySection({ title, subtitle, images }) {
  return (
    <section className="gallery-section">
      <div className="gallery-header">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>

      <div className="slider">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${title} ${index + 1}`}
            loading="lazy"
          />
        ))}
      </div>
    </section>
  );
}

export default function GalleryPage() {
  return (
    <div className="gallery-page">

      <GallerySection
        title="Scenes from Last Sunday"
        subtitle="Moments of worship, fellowship and community."
        images={latestPhotos}
      />

      <GallerySection
        title="Take a Look at How Our 70 Year Celebrations Went"
        subtitle="Celebrating God's faithfulness through the years."
        images={celebrationPhotos}
      />

      <VideoSection />
      
      <GallerySection
        title="Life at AIC Ziwani"
        subtitle="Snapshots from church life and ministry."
        images={generalGallery}
      />

    </div>
  );
}