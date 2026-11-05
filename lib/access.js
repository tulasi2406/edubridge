function canMessage(user, targetId, users, sessions) {
  if (!user || !targetId || user.id === targetId) return false;
  const target = users.find(candidate => candidate.id === targetId && candidate.active !== false);
  if (!target) return false;
  const rolesAreMentorPair = (user.role === 'student' && target.role === 'mentor') || (user.role === 'mentor' && target.role === 'student');
  if (!rolesAreMentorPair) return false;
  return sessions.some(session => {
    const isPair = (session.studentId === user.id && session.mentorId === target.id) || (session.studentId === target.id && session.mentorId === user.id);
    return isPair && ['Accepted', 'Completed'].includes(session.status);
  });
}
module.exports = { canMessage };
