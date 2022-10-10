export function statusColor(status) {
    if (status==='Running') return '#5FBF00';
    if (status==='Alerting') return '#FFD91E';
    if (status==='Stopped') return '#F63D52';
}