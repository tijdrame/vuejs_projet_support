export default {
  contactCoach(context, payload) {
    const newrRequest = {
      id: new Date().toISOString(),
      coachId: payload.coachId,
      userEmail: payload.email,
      message: payload.message,
    };
    context.commit('addRequest', newrRequest);
  },
};
