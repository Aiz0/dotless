#!/bin/sh

if lspci -k | grep -A 2 -E "(VGA|3D)" | grep -qi nvidia 2>/dev/null; then
	command -v "nvidia-smi" >/dev/null 2>&1 || exit
	nvidia-smi -q -d UTILIZATION | awk -F: '/Avg/ {print $2}' | grep -Po '[0-9]+' -m 1
elif lspci -k | grep -A 2 -E "(VGA|3D)" | grep -qi amd; then
    radeontop --limit 1 --dump - | tr -d '\n' | cut -s -d ',' -f3 | cut -s -d ' ' -f3 | tr -d '%'
else
    intel_gpu_top -J | jaq '.engines."Render/3D/0".busy' 2>/dev/null
fi
