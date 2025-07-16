export function HomelabSection() {
  const specs = [
    "Server: AMD Ryzen 9 3900X (12-Core), 128GB DDR4, 2×1TB NVMe SSD",
    "GPUs: RTX 4070 Ti (AI workloads), RTX 2070 (media encoding)",
    "Runs: Proxmox",
  ];

  const services = [
    "cloudflare tunnel",
    "AI",
    "jellyfin",
    "docker",
    "coolify",
    "truenas",
    "homeassistant",
  ];

  const networking = [
    "Raspberry Pi 4: PiHole",
    "Networking: Unifi Dream Machine SE, Unifi Aggregation Switch, Unifi PoE 24 Switch",
    "Connectivity: Bidirectional 2Gbps fiber",
  ];

  return (
    <section className="space-y-4">
      <div className="text-2xl glow-text text-purple-400">
        {"> systemctl status homelab"}
      </div>

      <div className="pl-4 space-y-4">
        <div className="text-green-300">
          ● homelab.service - Personal Infrastructure
        </div>
        <div className="text-green-400/90">
          Active:{" "}
          <span className="text-green-400 glow-text">active (running)</span>
        </div>

        <div className="space-y-3 mt-4">
          <div>
            <div className="text-green-300 font-semibold">Hardware Specs:</div>
            <div className="pl-4 space-y-1">
              {specs.map((spec, index) => (
                <div key={index} className="text-green-400/80">
                  • {spec}
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="text-green-300 font-semibold">
              Running Services:
            </div>
            <div className="pl-4 flex flex-wrap gap-2 mt-2">
              {services.map((service, index) => (
                <span
                  key={index}
                  className="bg-green-400/20 text-green-300 px-2 py-1 rounded text-sm border border-green-400/30"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>

          <div>
            <div className="text-green-300 font-semibold">
              Network Infrastructure:
            </div>
            <div className="pl-4 space-y-1">
              {networking.map((item, index) => (
                <div key={index} className="text-green-400/80">
                  • {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
