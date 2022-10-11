export function statusColor(status) {
  if (status === 'Running') return '#5FBF00';
  if (status === 'Alerting') return '#FECE00';
  if (status === 'Stopped') return '#F63D52';
};

export function groupBy(array, key) {
  const group = array.reduce((hash, obj) => {
    if (obj[key] === undefined) return hash;
    return Object.assign(hash, { [obj[key]]: (hash[obj[key]] || []).concat(obj) })
  }, {});

  return Object.keys(group).map( (key)=> { 
    return { name: key, y: group[key].length, color: statusColor(key)}
  });
};